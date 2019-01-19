'use strict';

/**
 * Items.js controller
 *
 * @description: A set of functions called "actions" for managing `Items`.
 */

module.exports = {

  /**
   * Retrieve items records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.items.search(ctx.query);
    } else {
      return strapi.services.items.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a items record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.items.fetch(ctx.params);
  },

  /**
   * Count items records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.items.count(ctx.query);
  },

  /**
   * Create a/an items record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.items.add(ctx.request.body);
  },

  /**
   * Update a/an items record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.items.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an items record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.items.remove(ctx.params);
  },

  /**
   * Add relation to a/an items record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.items.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an items record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.items.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an items record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.items.removeRelation(ctx.params, ctx.request.body);
  }
};
