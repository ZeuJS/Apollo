"use strict";

// Prototyping ChunksMapper from AbstractMapper
var AbstractMapper = require('zeujsChaos/mappers/abstract.js');

var ChunksMapper = function ChunksMapper(modules, bag) {
  this.bag = bag;
  AbstractMapper.call(this, modules);
};

ChunksMapper.prototype = Object.create(AbstractMapper.prototype);
ChunksMapper.prototype.constructor = ChunksMapper;
ChunksMapper.prototype.entityKey = 'apolloChunks';
module.exports = ChunksMapper;