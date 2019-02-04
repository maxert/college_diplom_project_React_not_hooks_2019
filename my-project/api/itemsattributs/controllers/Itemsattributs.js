'use strict';

/**
 * Itemsattributs.js controller
 *
 * @description: A set of functions called "actions" for managing `Itemsattributs`.
 */

module.exports = {

  /**
   * Retrieve itemsattributs records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.itemsattributs.search(ctx.query);
    } else {
      return strapi.services.itemsattributs.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a itemsattributs record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.itemsattributs.fetch(ctx.params);
  },

  /**
   * Count itemsattributs records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.itemsattributs.count(ctx.query);
  },

  /**
   * Create a/an itemsattributs record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.itemsattributs.add(ctx.request.body);
  },

  /**
   * Update a/an itemsattributs record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.itemsattributs.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an itemsattributs record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.itemsattributs.remove(ctx.params);
  },

  /**
   * Add relation to a/an itemsattributs record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.itemsattributs.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an itemsattributs record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.itemsattributs.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an itemsattributs record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.itemsattributs.removeRelation(ctx.params, ctx.request.body);
  }
};
