'use strict';

/**
 * Processor.js controller
 *
 * @description: A set of functions called "actions" for managing `Processor`.
 */

module.exports = {

  /**
   * Retrieve processor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.processor.search(ctx.query);
    } else {
      return strapi.services.processor.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a processor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.processor.fetch(ctx.params);
  },

  /**
   * Count processor records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.processor.count(ctx.query);
  },

  /**
   * Create a/an processor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.processor.add(ctx.request.body);
  },

  /**
   * Update a/an processor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.processor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an processor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.processor.remove(ctx.params);
  },

  /**
   * Add relation to a/an processor record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.processor.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an processor record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.processor.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an processor record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.processor.removeRelation(ctx.params, ctx.request.body);
  }
};
