"use strict";

var AbstractBag = require('zeujsChaos/bags/abstract.js');

var RoutesBag = function RoutesBag() {
  AbstractBag.call(this);
};

RoutesBag.prototype = Object.create(AbstractBag.prototype);
RoutesBag.prototype.constructor = RoutesBag;

RoutesBag.prototype.resolve = function resolve(res) {
  var found;
  try {
    this.data.forEach(function (datum) {
      if (datum.definition.hasId(res.method) && datum.definition.matchRoute(res.url)) {
        found = datum.definition.findById(res.method);
      }
    });
  } catch (e) {
    if (e !== 'break') { throw e; }
  }
  return found;

};

module.exports = RoutesBag;