"use strict";

// Prototyping MiddlewaresMapper from AbstractMapper
var AbstractMapper = require('zeujsChaos/mappers/abstract.js');

var MiddlewaresMapper = function MiddlewaresMapper(modules, bag) {
  this.bag = bag;
  AbstractMapper.call(this, modules);
};

MiddlewaresMapper.prototype = Object.create(AbstractMapper.prototype);
MiddlewaresMapper.prototype.constructor = MiddlewaresMapper;
MiddlewaresMapper.prototype.entityKey = 'apolloMiddlewares';
module.exports = MiddlewaresMapper;