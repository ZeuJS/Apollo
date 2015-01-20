"use strict";

function RequiredValidator(input) {
  if (typeof input === 'undefined') {
    throw 'Can\'t be undefined'
  }
}
module.exports = {
  id: "Required",
  type: RequiredValidator
};