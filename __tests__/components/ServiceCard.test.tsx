import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceCard from '@/components/Cards/ServiceCard';

describe('ServiceCard Component', () => {
  const mockProps = {
    subtitle: 'Test Subtitle',
    title: 'Test Title',
    description: 'Test description for the service card.',
  };

  it('renders with correct subtitle, title and description', () => {
    render(<ServiceCard {...mockProps} />);

    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description for the service card.')).toBeInTheDocument();
  });

  it('renders HTML content in description', () => {
    const htmlDescription = 'This is a <strong>bold</strong> and <em>italic</em> description.';
    render(<ServiceCard {...mockProps} description={htmlDescription} />);

    // Check that HTML elements are rendered
    expect(document.querySelector('strong')).toBeInTheDocument();
    expect(document.querySelector('em')).toBeInTheDocument();
    expect(document.querySelector('strong')).toHaveTextContent('bold');
    expect(document.querySelector('em')).toHaveTextContent('italic');
  });

  it('renders action when provided', () => {
    const actionElement = <button>Test Action</button>;
    render(<ServiceCard {...mockProps} action={actionElement} />);

    expect(screen.getByText('Test Action')).toBeInTheDocument();
  });

  it('does not render action section when not provided', () => {
    render(<ServiceCard {...mockProps} />);

    const actionContainer = document.querySelector('.mt-7');
    expect(actionContainer).not.toBeInTheDocument();
  });

  it('renders with hover effect by default', () => {
    render(<ServiceCard {...mockProps} />);
    
    // Check that the style tag is present for hover effect
    const styleTag = document.querySelector('style');
    expect(styleTag).toBeInTheDocument();
  });

  it('disables hover effect when hoverEffect is false', () => {
    render(<ServiceCard {...mockProps} hoverEffect={false} />);
    
    // Check that the style tag is not present when hoverEffect is false
    const styleTag = document.querySelector('style');
    expect(styleTag).not.toBeInTheDocument();
  });

  it('renders action in correct container', () => {
    const actionElement = <button>Test Action</button>;
    render(<ServiceCard {...mockProps} action={actionElement} />);

    const actionContainer = screen.getByText('Test Action').closest('div');
    expect(actionContainer).toHaveClass('mt-7');
  });

  it('handles complex action elements', () => {
    const complexAction = (
      <div>
        <button>Primary Action</button>
        <button>Secondary Action</button>
      </div>
    );
    render(<ServiceCard {...mockProps} action={complexAction} />);

    expect(screen.getByText('Primary Action')).toBeInTheDocument();
    expect(screen.getByText('Secondary Action')).toBeInTheDocument();
  });

  it('handles empty description', () => {
    render(<ServiceCard {...mockProps} description="" />);
    
    // Check that the description paragraph exists but is empty
    const descriptionElement = document.querySelector('p.mt-2');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent('');
  });

  it('handles long content', () => {
    const longTitle = 'This is a very long title that should still be rendered correctly by the ServiceCard component';
    const longDescription = 'This is a very long description that contains multiple sentences and should wrap properly within the card layout. It should maintain proper spacing and readability.';
    
    render(<ServiceCard {...mockProps} title={longTitle} description={longDescription} />);
    
    expect(screen.getByText(longTitle)).toBeInTheDocument();
    expect(screen.getByText(longDescription)).toBeInTheDocument();
  });

  it('handles special characters in content', () => {
    const specialContent = {
      subtitle: 'Special & Characters',
      title: 'Title with "quotes" and \'apostrophes\'',
      description: 'Description with <script>alert("test")</script> and &amp; entities.',
    };
    
    render(<ServiceCard {...mockProps} {...specialContent} />);
    
    expect(screen.getByText('Special & Characters')).toBeInTheDocument();
    expect(screen.getByText('Title with "quotes" and \'apostrophes\'')).toBeInTheDocument();
    expect(screen.getByText(/Description with.*and.*entities/)).toBeInTheDocument();
  });

  it('maintains proper structure with all props', () => {
    const actionElement = <button>Action Button</button>;
    render(
      <ServiceCard 
        {...mockProps} 
        action={actionElement}
        className="test-class"
        hoverEffect={true}
      />
    );

    expect(screen.getByText('Action Button')).toBeInTheDocument();
    expect(document.querySelector('style')).toBeInTheDocument();
  });
});
