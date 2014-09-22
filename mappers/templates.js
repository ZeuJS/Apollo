"use strict";

// Prototyping TemplatesMapper from AbstractMapper
var AbstractMapper = require('zeujsChaos/mappers/abstract.js');

var TemplatesMapper = function TemplatesMapper(modules, bag) {
  this.bag = bag;
  AbstractMapper.call(this, modules);
};

TemplatesMapper.prototype = Object.create(AbstractMapper.prototype);
TemplatesMapper.prototype.constructor = TemplatesMapper;
TemplatesMapper.prototype.entityKey = 'apolloTemplates';
module.exports = TemplatesMapper;