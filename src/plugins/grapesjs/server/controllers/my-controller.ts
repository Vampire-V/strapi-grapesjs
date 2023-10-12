import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    console.log(ctx);
    
    ctx.body = strapi
      .plugin('grapesjs')
      .service('myService')
      .getWelcomeMessage();
  },
  async getPages(ctx) {
    // await this.validateQuery(ctx);
    // const sanitizedQuery = await this.sanitizeQuery(ctx);
    const s = await strapi.entityService?.findOne('api::page.page',1,{
      fields: ['name']
    })
    // const a = await strapi.query('plugin::grapesjs.web').count()
    console.log(s);
    
    // const { results, pagination } = await strapi.controller("api::page.page").find(sanitizedQuery);
    // return this.transformResponse(results, { pagination });
    return ctx.body = s
  }
});
