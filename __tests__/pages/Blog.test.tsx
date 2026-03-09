import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BlogClientPage from '@/app/blog/BlogClientPage';
import {
  mockBlogStory,
  mockArticles,
  mockCategories,
} from '../__mocks__/blog-story';
import { renderWithMotion } from '../__utils__/test-helpers';
import { CMS_MESSAGES } from '@/constants/messages';

jest.mock('@storyblok/react', () => ({
  useStoryblokState: (initialStory: unknown) => initialStory,
}));

const mockGetArticlesFn = jest.fn();
jest.mock('@/lib/storyblok-api', () => ({
  getStoryblokVersion: () => 'draft' as const,
  getStory: jest.fn(),
  getArticles: (...args: unknown[]) => mockGetArticlesFn(...args),
  getArticleBySlug: jest.fn(),
  getDatasourceEntries: jest.fn(),
}));

jest.mock('@/components/storyblok/StoryblokPage', () => {
  return function MockStoryblokPage({
    children,
  }: {
    story: unknown;
    children: React.ReactNode;
  }) {
    return <main data-testid="page">{children}</main>;
  };
});

const mockGetArticles = mockGetArticlesFn;

describe('BlogClientPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetArticles.mockResolvedValue(mockArticles);
  });

  describe('Initial render', () => {
    it('renders the page with section title and subtitle', () => {
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
        />,
      );

      expect(screen.getByTestId('page')).toBeInTheDocument();
      expect(screen.getByText('Artigos')).toBeInTheDocument();
      expect(screen.getByText('Novidades e reflexões')).toBeInTheDocument();
    });

    it('renders the search input with correct attributes', () => {
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
        />,
      );

      const searchInput = screen.getByRole('search', {
        name: 'Pesquisar artigos',
      });
      expect(searchInput).toBeInTheDocument();
      expect(searchInput).toHaveAttribute(
        'placeholder',
        'Pesquisar artigos...',
      );
      expect(searchInput).toHaveAttribute('type', 'text');
    });

    it('renders all initial articles as PostCards', () => {
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
        />,
      );

      mockArticles.forEach((article) => {
        expect(screen.getByText(article.title)).toBeInTheDocument();
        expect(screen.getByText(article.summary)).toBeInTheDocument();
      });
    });

    it('renders article links with correct hrefs', () => {
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
        />,
      );

      mockArticles.forEach((article) => {
        const link = screen.getByRole('link', { name: new RegExp(article.title) });
        expect(link).toHaveAttribute('href', `/blog/${article.slug}`);
      });
    });

    it('renders category filter buttons', () => {
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
        />,
      );

      expect(screen.getByRole('button', { name: 'Todas as categorias' })).toBeInTheDocument();
      mockCategories.forEach((cat) => {
        expect(screen.getByRole('button', { name: cat.label })).toBeInTheDocument();
      });
    });
  });

  describe('Empty state', () => {
    it('shows empty message when no articles are provided', () => {
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={[]}
          categories={mockCategories}
        />,
      );

      expect(screen.getByText(CMS_MESSAGES.noBlogPosts)).toBeInTheDocument();
    });
  });

  describe('Search functionality', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('updates search input value when user types', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
        />,
      );

      const searchInput = screen.getByRole('search', {
        name: 'Pesquisar artigos',
      });
      await user.type(searchInput, 'medicina');

      expect(searchInput).toHaveValue('medicina');
    });

    it('fetches articles with search term after 300ms debounce', async () => {
      const searchResults = [mockArticles[0]];
      mockGetArticles.mockResolvedValue(searchResults);

      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
          defaultArticlesLimit={25}
        />,
      );

      const searchInput = screen.getByRole('search', {
        name: 'Pesquisar artigos',
      });
      await user.type(searchInput, 'integrativa');

      // Before debounce: getArticles not called with search term
      expect(mockGetArticles).toHaveBeenCalledTimes(0);

      // Advance past debounce (300ms) - wrap in act for React state updates
      const { act } = await import('@testing-library/react');
      await act(async () => {
        jest.advanceTimersByTime(350);
      });

      await waitFor(() => {
        expect(mockGetArticles).toHaveBeenCalledWith(
          undefined,
          25,
          'integrativa',
        );
      });

      await waitFor(() => {
        expect(screen.getByText('Medicina Integrativa e Bem-Estar')).toBeInTheDocument();
      });
    });

    it('fetches default articles when search is cleared', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      const { act } = await import('@testing-library/react');
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
          defaultArticlesLimit={25}
        />,
      );

      const searchInput = screen.getByRole('search', {
        name: 'Pesquisar artigos',
      });

      // Type search
      await user.type(searchInput, 'test');
      await act(async () => {
        jest.advanceTimersByTime(350);
      });
      await waitFor(() => {
        expect(mockGetArticles).toHaveBeenCalledWith(undefined, 25, 'test');
      });

      // Clear search
      await user.clear(searchInput);
      await act(async () => {
        jest.advanceTimersByTime(350);
      });

      await waitFor(() => {
        expect(mockGetArticles).toHaveBeenLastCalledWith(
          undefined,
          25,
          undefined,
        );
      });
    });

    it('does not fetch on initial mount (uses initialArticles)', async () => {
      const { act } = await import('@testing-library/react');
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
        />,
      );

      // Advance past debounce - initial mount with empty search should not trigger fetch
      await act(async () => {
        jest.advanceTimersByTime(350);
      });

      expect(mockGetArticles).not.toHaveBeenCalled();
    });
  });

  describe('Category filter', () => {
    it('filters articles by category when category button is clicked', async () => {
      const user = userEvent.setup();
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
        />,
      );

      // Click "Medicina" category (2 articles have this category)
      const medicinaButton = screen.getByRole('button', { name: 'Medicina' });
      await user.click(medicinaButton);

      const medicinaArticles = mockArticles.filter(
        (a) => a.category === 'medicina',
      );
      medicinaArticles.forEach((article) => {
        expect(screen.getByText(article.title)).toBeInTheDocument();
      });
      // Saúde Mental article should not be visible
      expect(screen.queryByText('Saúde Mental e Equilíbrio')).not.toBeInTheDocument();
    });

    it('shows all articles when "Todas" is clicked after filtering', async () => {
      const user = userEvent.setup();
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
        />,
      );

      // Filter by Medicina
      await user.click(screen.getByRole('button', { name: 'Medicina' }));
      expect(screen.queryByText('Saúde Mental e Equilíbrio')).not.toBeInTheDocument();

      // Click Todas
      await user.click(screen.getByRole('button', { name: 'Todas as categorias' }));
      mockArticles.forEach((article) => {
        expect(screen.getByText(article.title)).toBeInTheDocument();
      });
    });
  });

  describe('Loading state', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });
    afterEach(() => {
      jest.useRealTimers();
    });

    it('sets aria-busy on search input when fetching', async () => {
      let resolveFetch: (value: typeof mockArticles) => void;
      const fetchPromise = new Promise<typeof mockArticles>((resolve) => {
        resolveFetch = resolve;
      });
      mockGetArticles.mockReturnValue(fetchPromise);

      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      const { act } = await import('@testing-library/react');
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
        />,
      );

      const searchInput = screen.getByRole('search', {
        name: 'Pesquisar artigos',
      });
      await user.type(searchInput, 'test');
      await act(async () => {
        jest.advanceTimersByTime(350);
      });

      await waitFor(() => {
        expect(searchInput).toHaveAttribute('aria-busy', 'true');
      });

      await act(async () => {
        resolveFetch!(mockArticles);
      });
      await waitFor(() => {
        expect(searchInput).toHaveAttribute('aria-busy', 'false');
      });
    });
  });

  describe('Error handling', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });
    afterEach(() => {
      jest.useRealTimers();
    });

    it('shows empty state when fetch fails', async () => {
      mockGetArticles.mockRejectedValue(new Error('Network error'));

      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      const { act } = await import('@testing-library/react');
      renderWithMotion(
        <BlogClientPage
          initialStory={mockBlogStory}
          initialArticles={mockArticles}
          categories={mockCategories}
        />,
      );

      const searchInput = screen.getByRole('search', {
        name: 'Pesquisar artigos',
      });
      await user.type(searchInput, 'failing-search');
      await act(async () => {
        jest.advanceTimersByTime(350);
      });

      await waitFor(() => {
        expect(screen.getByText(CMS_MESSAGES.noBlogPosts)).toBeInTheDocument();
      });
    });
  });
});
