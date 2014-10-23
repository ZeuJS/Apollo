"use strict";

// Prototyping FormValidatorsMapper from AbstractMapper
var AbstractMapper = require('zeujsChaos/mappers/abstract.js');

var FormValidatorsMapper = function FormValidatorsMapper(modules, bag) {
  this.bag = bag;
  AbstractMapper.call(this, modules);
};

FormValidatorsMapper.prototype = Object.create(AbstractMapper.prototype);
FormValidatorsMapper.prototype.constructor = FormValidatorsMapper;
FormValidatorsMapper.prototype.entityKey = 'apolloFormValidators';
module.exports = FormValidatorsMapper;