import type { Schema, Struct } from '@strapi/strapi';

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
      'info-block.button': InfoBlockButton;
    }
  }
}
