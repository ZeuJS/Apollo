"use strict";

// Prototyping FormValidationsMapper from AbstractMapper
var AbstractMapper = require('zeujsChaos/mappers/abstract.js');

var FormValidationsMapper = function FormValidationsMapper(modules, bag) {
  this.bag = bag;
  AbstractMapper.call(this, modules);
};

FormValidationsMapper.prototype = Object.create(AbstractMapper.prototype);
FormValidationsMapper.prototype.constructor = FormValidationsMapper;
FormValidationsMapper.prototype.entityKey = 'apolloFormValidations';
module.exports = FormValidationsMapper;