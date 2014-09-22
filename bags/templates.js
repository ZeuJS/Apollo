"use strict";

var path = require('path');
var fs = require('fs');

var AbstractBag = require('zeujsChaos/bags/abstract.js');

var TemplatesBag = function TemplatesBag() {
  AbstractBag.call(this);
};

TemplatesBag.prototype = Object.create(AbstractBag.prototype);
TemplatesBag.prototype.constructor = TemplatesBag;
TemplatesBag.prototype.resolvePath = function (lookingFor) {
    var foundDatum;
    try {
      this.data.forEach(function findInEachDatum(datum) {
        var fullPath = path.join(datum.path, lookingFor);
        if (fs.existsSync(fullPath)) {
          foundDatum = fullPath;
          throw 'found';
        }
      });
    } catch (e) {
      if (e !== 'found') { throw e; }
    }
    return foundDatum;
};

module.exports = TemplatesBag;