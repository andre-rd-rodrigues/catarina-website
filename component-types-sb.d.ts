export interface AssetStoryblok {
  _uid?: string;
  id: number | null;
  alt: string | null;
  name: string;
  focus: string | null;
  source: string | null;
  title: string | null;
  filename: string;
  copyright: string | null;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: unknown;
  };
  is_external_url?: boolean;
  [k: string]: unknown;
}

export interface HeadingStoryblok {
  title: string;
  image?: AssetStoryblok;
  _uid: string;
  component: 'heading';
  [k: string]: unknown;
}

export interface PageStoryblok {
  body?: (
    | HeadingStoryblok
    | PageStoryblok
    | PageHeaderStoryblok
    | PostStoryblok
    | TextImageSectionStoryblok
    | HeroStoryblok
  )[];
  _uid: string;
  component: 'page';
  uuid?: string;
  [k: string]: unknown;
}

export interface TextImageSectionStoryblok {
  layout: 'text_first' | 'image_first';
  title: string;
  subtitle?: string;
  body: RichtextStoryblok;
  image: AssetStoryblok;
  image_alt?: string;
  cta_href?: string;
  cta_label?: string;
  _uid: string;
  component: 'text_image_section';
  [k: string]: unknown;
}

export interface PageHeaderStoryblok {
  image: AssetStoryblok;
  title: string;
  subtitle?: string;
  _uid: string;
  component: 'page header';
  [k: string]: unknown;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: unknown;
  text?: string;
  [k: string]: unknown;
}

export interface HeroStoryblok {
  title: string;
  subtitle?: string;
  content: string;
  action_label?: string;
  action_href?: string;
  class_name?: string;
  _uid: string;
  component: 'hero';
  [k: string]: unknown;
}

export interface PostStoryblok {
  title: string;
  image?: AssetStoryblok;
  category: number | string;
  summary: string;
  body: RichtextStoryblok;
  _uid: string;
  component: 'post';
  [k: string]: unknown;
}
