"use strict";

var AbstractBag = require('zeujsChaos/bags/abstract.js');

var FormsBag = function FormsBag() {
  AbstractBag.call(this);
};

FormsBag.prototype = Object.create(AbstractBag.prototype);
FormsBag.prototype.constructor = FormsBag;
FormsBag.prototype.findById = function findById(search) {
  var found = AbstractBag.prototype.findById.call(this, search);
  if (typeof found === 'undefined' || typeof found.form === 'undefined') {
    throw util.format('Form "%s" not found', search);
  }
  return found.form;
}
FormsBag.prototype.compile = function compile(search) {
  var form = FormsBag.prototype.findById.call(this, search);

}
module.exports = FormsBag;