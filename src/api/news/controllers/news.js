'use strict';

/**
 * news controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::news.news', ({ strapi }) =>  ({

      async logViewCount(ctx) {
        const { id } = ctx.params;
        try {
          const news = await strapi.services.news.findOne({ id });
          await strapi.services.news.update(
            { id: news.id },
            { views: parseInt(news.viewCount) + 1 }
          );
          return ctx.send({
            success: true,
          });
        } catch (error) {
          console.error(error);
          return ctx.send({
            success: false,
          });
        }
        
    }
    
    })
);
