// for entities
type Entities = {
  text: string;
  color?: string;
  url?: string;
  font_style?: string;
};

// for formatted title and description
type FormattedAttribute = {
  text: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  entities?: Entities[];
};

// for background image or icon
type ImageAssets = {
  image_type: 'ast' | 'ext';
  image_url: string;
  aspect_ratio?: number;
};

// for cta
type CTA = {
  text: string;
  bg_color?: string;
  url?: string;
  text_color?: string;
};

// for gradient
export type BgGradient = {
  colors: string[];
  angle: number;
};

export type CardType = {
  name: string;
  formatted_title?: FormattedAttribute;
  title?: string;
  formatted_description?: FormattedAttribute;
  description?: string;
  icon?: ImageAssets;
  url?: string;
  bg_image?: ImageAssets;
  bg_color?: string;
  bg_gradient?: BgGradient;
  cta?: CTA[];
};

export type CardGroupType = {
  id: number;
  design_type: 'HC1' | 'HC3' | 'HC5' | 'HC6' | 'HC9';
  name: string;
  cards: CardType[];
  height: number;
  is_scrollable: boolean;
};
