import type { Schema, Struct } from '@strapi/strapi';

export interface BlogArticleHeadline extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_headlines';
  info: {
    description: '';
    displayName: 'headline';
  };
  attributes: {
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    isHeadlineWhite: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogArticleLandscapeImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_landscape_images';
  info: {
    displayName: 'landscapeImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageCaption: Schema.Attribute.String;
  };
}

export interface BlogArticleParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_paragraphs';
  info: {
    displayName: 'paragraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Blocks;
  };
}

export interface BlogArticleParagraphWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_paragraph_with_images';
  info: {
    displayName: 'paragraphWithImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageCaption: Schema.Attribute.String;
    imageShowsRight: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    isLandscape: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    pargraph: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface InfoBlockButton extends Struct.ComponentSchema {
  collectionName: 'components_info_block_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    colour: Schema.Attribute.Enumeration<['turquoise', 'orange', 'beige']> &
      Schema.Attribute.DefaultTo<'turquoise'>;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-article.headline': BlogArticleHeadline;
      'blog-article.landscape-image': BlogArticleLandscapeImage;
      'blog-article.paragraph': BlogArticleParagraph;
      'blog-article.paragraph-with-image': BlogArticleParagraphWithImage;
      'info-block.button': InfoBlockButton;
    }
  }
}
