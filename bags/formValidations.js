"use strict";

var AbstractBag = require('zeujsChaos/bags/abstract.js');

var FormValidationsBag = function FormValidationsBag() {
  AbstractBag.call(this);
};

FormValidationsBag.prototype = Object.create(AbstractBag.prototype);
FormValidationsBag.prototype.constructor = FormValidationsBag;

module.exports = FormValidationsBag;