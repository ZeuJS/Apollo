"use strict";

// Prototyping FormsMapper from AbstractMapper
var AbstractMapper = require('zeujsChaos/mappers/abstract.js');

var FormsMapper = function FormsMapper(modules, bag) {
  this.bag = bag;
  AbstractMapper.call(this, modules);
};

FormsMapper.prototype = Object.create(AbstractMapper.prototype);
FormsMapper.prototype.constructor = FormsMapper;
FormsMapper.prototype.entityKey = 'apolloForms';
module.exports = FormsMapper;