'use strict';

/**
 * Basket.js controller
 *
 * @description: A set of functions called "actions" for managing `Basket`.
 */

module.exports = {

  /**
   * Retrieve basket records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.basket.search(ctx.query);
    } else {
      return strapi.services.basket.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a basket record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.basket.fetch(ctx.params);
  },

  /**
   * Count basket records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.basket.count(ctx.query);
  },

  /**
   * Create a/an basket record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.basket.add(ctx.request.body);
  },

  /**
   * Update a/an basket record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.basket.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an basket record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.basket.remove(ctx.params);
  },

  /**
   * Add relation to a/an basket record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.basket.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an basket record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.basket.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an basket record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.basket.removeRelation(ctx.params, ctx.request.body);
  }
};
