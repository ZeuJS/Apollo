"use strict";

var AbstractBag = require('zeujsChaos/bags/abstract.js');

var ChunksBag = function ChunksBag() {
  AbstractBag.call(this);
};

ChunksBag.prototype = Object.create(AbstractBag.prototype);
ChunksBag.prototype.constructor = ChunksBag;

module.exports = ChunksBag;