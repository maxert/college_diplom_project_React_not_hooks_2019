'use strict';

/**
 * Video.js controller
 *
 * @description: A set of functions called "actions" for managing `Video`.
 */

module.exports = {

  /**
   * Retrieve video records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.video.search(ctx.query);
    } else {
      return strapi.services.video.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a video record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.video.fetch(ctx.params);
  },

  /**
   * Count video records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.video.count(ctx.query);
  },

  /**
   * Create a/an video record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.video.add(ctx.request.body);
  },

  /**
   * Update a/an video record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.video.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an video record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.video.remove(ctx.params);
  },

  /**
   * Add relation to a/an video record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.video.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an video record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.video.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an video record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.video.removeRelation(ctx.params, ctx.request.body);
  }
};
