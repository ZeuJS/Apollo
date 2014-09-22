"use strict";

var path = require('path');

var RoutesBag = require('./bags/routes.js');
var MiddlewaresBag = require('./bags/middlewares.js');
var ChunksBag = require('./bags/chunks.js');
var TemplatesBag = require('./bags/templates.js');

var RoutesMapper = require('./mappers/routes.js');
var MiddlewaresMapper = require('./mappers/middlewares.js');
var ChunksMapper = require('./mappers/chunks.js');
var TemplatesMapper = require('./mappers/templates.js');

module.exports =
{
  uninstallable: false,
  services: [
    {
      id: 'frontServer',
      service: require('./services/server.js'),
    },
    {
      id: 'apolloRoutes',
      service: new RoutesBag(),
    },
    {
      id: 'apolloMiddlewares',
      service: new MiddlewaresBag(),
    },
    {
      id: 'apolloChunks',
      service: new ChunksBag(),
    },
    {
      id: 'apolloTemplates',
      service: new TemplatesBag(),
    },
  ],
  events: [
    {
      on: 'zeujs_chaos_ready',
      id: 'startApolloServer',
      call: function(services) {
          services.findById('frontServer')(services);
      },
    },
    {
      on: 'zeujs_chaos_map',
      id: 'mapRoutesBagApollo',
      call: function (modules, services) {
        var RoutesBag = services.findById('apolloRoutes');
        new RoutesMapper(modules, RoutesBag);

        var middlewaresBag = services.findById('apolloMiddlewares');
        new MiddlewaresMapper(modules, middlewaresBag);

        var chunksBag = services.findById('apolloChunks');
        new ChunksMapper(modules, chunksBag);

        var templatesBag = services.findById('apolloTemplates');
        new TemplatesMapper(modules, templatesBag);
      },
    },
  ],
  apolloRoutes: [
  ],
  apolloTemplates: [
    {
      id: "base",
      path: path.resolve(path.join(__dirname, 'baseTemplate'))
    }
  ],
  configs: {
    apollo: {
      listen: 1203,
    },
  },
};