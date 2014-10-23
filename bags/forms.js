"use strict";

var AbstractBag = require('zeujsChaos/bags/abstract.js');

var FormsBag = function FormsBag() {
  AbstractBag.call(this);
};

FormsBag.prototype = Object.create(AbstractBag.prototype);
FormsBag.prototype.constructor = FormsBag;

module.exports = FormsBag;