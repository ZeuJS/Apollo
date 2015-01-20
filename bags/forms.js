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

FormsBag.prototype.compile = function compile(search, data) {
  var form = getClone(FormsBag.prototype.findById.call(this, search));
  iterateInFormFields(form, [form.name], function(field, path) {
    var valueFromData = findValue(data, path);
    if (typeof valueFromData !== 'undefined') {
      field.value = valueFromData;
    }
  });
  return form;
}

FormsBag.prototype.isValid = function isValid(services, form) {
  var validators = services.findById('apolloFormValidators');
  var valid = true;
  iterateInFormFields(form, [form.name], function(field) {
    if (typeof field.validation !== 'undefined') {
      field.validation.forEach(function(validatorName) {
        var validator = validators.findById(validatorName);
        if (validator) {
          var validatorType = validator.type;
          try {
            new validatorType(field.value);
          } catch (e) {
            field.errors = [e];
            valid = false;
          }
        }
      });
    }
  });
  return valid;
}

FormsBag.prototype.getData = function getData(form) {
  var data = {};

  iterateInFormFields(form, [form.name], function(field, path) {
    if (typeof field.value !== 'undefined') {
      setValue (data, path, field.value)
    }
  });
  return data;
}

module.exports = FormsBag;

function iterateInFormFields(fieldsContainer, path, callback) {
  if ('fields' in fieldsContainer) {
    fieldsContainer.fields.forEach(function(field, i) {
      var currentPath = path.concat(field.name);
      callback(fieldsContainer.fields[i], currentPath);
      iterateInFormFields(fieldsContainer.fields[i], currentPath, callback);
    });
  }
}

function findValue (obj, path) {
  if (!obj) return undefined;
  if (obj && !path) return obj;

  var props = path.concat(); //Clone
  var currentObject = obj;

  for (var i = 0; i < props.length; ++i) {
    currentObject = currentObject[props[i]];
    if (!currentObject) return undefined;
  }
  return currentObject;
}

function setValue (obj, path, value) {
  obj = obj || {};

  var props = path.concat(); //Clone
  var currentObject = obj;

  for (var i = 0; i < props.length - 1; ++i) {
    if (!currentObject[props[i]]) {
      currentObject[props[i]] = {};
    }
    currentObject = currentObject[props[i]];
  }
  currentObject[props[i]] = value;
}

function getClone(obj) {
  if(obj == null || typeof(obj) != 'object') {
    return obj;
  }

  var temp = obj.constructor();

  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      temp[key] = getClone(obj[key]);
    }
  }
  return temp;
}