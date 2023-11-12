'use strict';

/**
 * news router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::news.news',
{
    only: ['findOne', 'find'],
    config: {
        findOne: {
        auth: false,
        policies: [],
        middlewares: [],
      },
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    }
  });
