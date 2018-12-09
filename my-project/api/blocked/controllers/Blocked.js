'use strict';

/**
 * Blocked.js controller
 *
 * @description: A set of functions called "actions" for managing `Blocked`.
 */

module.exports = {

  /**
   * Retrieve blocked records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.blocked.search(ctx.query);
    } else {
      return strapi.services.blocked.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a blocked record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.blocked.fetch(ctx.params);
  },

  /**
   * Count blocked records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.blocked.count(ctx.query);
  },

  /**
   * Create a/an blocked record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.blocked.add(ctx.request.body);
  },

  /**
   * Update a/an blocked record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.blocked.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an blocked record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.blocked.remove(ctx.params);
  },

  /**
   * Add relation to a/an blocked record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.blocked.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an blocked record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.blocked.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an blocked record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.blocked.removeRelation(ctx.params, ctx.request.body);
  }
};
