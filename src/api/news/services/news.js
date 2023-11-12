'use strict';

/**
 * news service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news.news', ({ strapi }) =>  ({
    async find(...args) {  
        const { results, pagination } = await super.find(...args);
        const simplifiedResults = results.map(result => {
            const simplifiedItem = {
                id: result.id,
                title: result.title,
                publishedAt: result.publishedAt,
                content: result.content,
                resource: result.resource,
                isHomeFeatured: result.isHomeFeatured,
                isCategoryFeatured: result.isCategoryFeatured,
                categories: result.categories ? result.categories.map(category => ({ name: category.name })) : undefined,
                image: result.image,
            };
            return simplifiedItem;
        });
        return { results: simplifiedResults, pagination };
      },
      async findOne(entityId, params) {

        if(params.populate){
            if (!params.populate.includes("categories")) {
                params.populate += ",categories";
              }
        }else{
            params.populate = "categories";
        }

        const result = await super.findOne(entityId, params);
        if(result){
            this.increaseNewsViewCount(result.id, result.viewCount);
            result.categories.forEach(async category => {
                this.increaseCategoryViewCount(category.id, category.viewCount);
            });
        }
        return result;
      },
      increaseNewsViewCount(newsId, oldViewCount){
        strapi.entityService.update('api::news.news', newsId, {
            data: {
              viewCount: parseInt(oldViewCount) + 1,
            },
        });
      },
      increaseCategoryViewCount(categoryId, oldViewCount){
        strapi.entityService.update('api::category.category', categoryId, {
            data: {
              viewCount: parseInt(oldViewCount) + 1,
            },
        });
      }
      
})

);
