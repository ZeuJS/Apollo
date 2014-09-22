"use strict";

var AbstractBag = require('zeujsChaos/bags/abstract.js');

var MiddlewaresBag = function MiddlewaresBag() {
  AbstractBag.call(this);
};

MiddlewaresBag.prototype = Object.create(AbstractBag.prototype);
MiddlewaresBag.prototype.constructor = MiddlewaresBag;

module.exports = MiddlewaresBag;