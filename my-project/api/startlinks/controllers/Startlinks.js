'use strict';

/**
 * Startlinks.js controller
 *
 * @description: A set of functions called "actions" for managing `Startlinks`.
 */

module.exports = {

  /**
   * Retrieve startlinks records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.startlinks.search(ctx.query);
    } else {
      return strapi.services.startlinks.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a startlinks record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.startlinks.fetch(ctx.params);
  },

  /**
   * Count startlinks records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.startlinks.count(ctx.query);
  },

  /**
   * Create a/an startlinks record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.startlinks.add(ctx.request.body);
  },

  /**
   * Update a/an startlinks record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.startlinks.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an startlinks record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.startlinks.remove(ctx.params);
  },

  /**
   * Add relation to a/an startlinks record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.startlinks.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an startlinks record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.startlinks.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an startlinks record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.startlinks.removeRelation(ctx.params, ctx.request.body);
  }
};
