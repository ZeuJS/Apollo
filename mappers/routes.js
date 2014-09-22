"use strict";

// Prototyping RoutesMapper from AbstractMapper
var AbstractMapper = require('zeujsChaos/mappers/abstract.js');

var RoutesMapper = function RoutesMapper(modules, bag) {
  this.bag = bag;
  AbstractMapper.call(this, modules);
};

RoutesMapper.prototype = Object.create(AbstractMapper.prototype);
RoutesMapper.prototype.constructor = RoutesMapper;
RoutesMapper.prototype.entityKey = 'apolloRoutes';
module.exports = RoutesMapper;