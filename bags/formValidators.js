"use strict";

var AbstractBag = require('zeujsChaos/bags/abstract.js');

var FormValidatorsBag = function FormValidatorsBag() {
  AbstractBag.call(this);
};

FormValidatorsBag.prototype = Object.create(AbstractBag.prototype);
FormValidatorsBag.prototype.constructor = FormValidatorsBag;

module.exports = FormValidatorsBag;