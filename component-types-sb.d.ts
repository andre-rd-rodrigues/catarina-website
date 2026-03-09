export interface PageStoryblok {
  body?: (
    | PageStoryblok
    | PageHeaderStoryblok
    | PostStoryblok
    | TextImageSectionStoryblok
    | SectionStoryblok
    | HeroStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: unknown;
}

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

export interface PageHeaderStoryblok {
  image: AssetStoryblok;
  title: string;
  subtitle?: string;
  _uid: string;
  component: "page header";
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

export interface PostStoryblok {
  title: string;
  image?: AssetStoryblok;
  category: number | string;
  summary: string;
  body: RichtextStoryblok;
  _uid: string;
  component: "post";
  [k: string]: unknown;
}

export interface TextImageSectionStoryblok {
  title: string;
  subtitle?: string;
  tagline?: string;
  layout?: "" | "text_first" | "image_first";
  image?: AssetStoryblok;
  image_alt?: string;
  body?: RichtextStoryblok;
  cta_label?: string;
  cta_href?: string;
  anchor_id?: string;
  _uid: string;
  component: "text image section";
  [k: string]: unknown;
}

export interface SectionStoryblok {
  title?: string;
  subtitle?: string;
  title_animation?: "" | "left" | "top";
  heading_align?: "" | "left" | "center";
  section_id?: string;
  background_color?: "" | "transparent" | "background_default" | "background_alt";
  body?: (
    | PageStoryblok
    | PageHeaderStoryblok
    | PostStoryblok
    | TextImageSectionStoryblok
    | SectionStoryblok
    | HeroStoryblok
  )[];
  _uid: string;
  component: "section";
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
  component: "hero";
  [k: string]: unknown;
}
