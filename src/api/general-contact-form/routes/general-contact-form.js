'use strict';

/**
 * general-contact-form router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::general-contact-form.general-contact-form',
{
    only: ['create'],
    config: {
        create: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    }
  });
