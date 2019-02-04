'use strict';

/**
 * Proisvoditename.js controller
 *
 * @description: A set of functions called "actions" for managing `Proisvoditename`.
 */

module.exports = {

  /**
   * Retrieve proisvoditename records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.proisvoditename.search(ctx.query);
    } else {
      return strapi.services.proisvoditename.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a proisvoditename record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.proisvoditename.fetch(ctx.params);
  },

  /**
   * Count proisvoditename records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.proisvoditename.count(ctx.query);
  },

  /**
   * Create a/an proisvoditename record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.proisvoditename.add(ctx.request.body);
  },

  /**
   * Update a/an proisvoditename record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.proisvoditename.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an proisvoditename record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.proisvoditename.remove(ctx.params);
  },

  /**
   * Add relation to a/an proisvoditename record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.proisvoditename.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an proisvoditename record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.proisvoditename.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an proisvoditename record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.proisvoditename.removeRelation(ctx.params, ctx.request.body);
  }
};
