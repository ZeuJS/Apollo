"use strict";
var http = require('http');
var swig  = require('swig');
function formStart(input) {
  var lookups = ['name', 'method', 'enctype', 'id', 'action'];
  var formData = [''];
  lookups.forEach(function(lookup) {
    if (lookup in input) {
      formData.push(lookup + '="' + input[lookup] + '"');
    }
  });
  return '<form' + formData.join(' ') + '>';
}
formStart.safe = true;
swig.setFilter('formStart', formStart);
function formEnd(input) {
  return '</form>';
}
formEnd.safe = true;
swig.setFilter('formEnd', formEnd);
function formRow(fieldsContainer, names) {

  var idChain = [fieldsContainer.name];
  names.forEach(function(name) {
    fieldsContainer.fields.forEach(function(subContainer){
      if (subContainer.name === name) {
        idChain.push(subContainer.name);
        fieldsContainer = subContainer;
      }
    })
  });
  var inputName = '';
  idChain.forEach(function(name, index) {
    if (index === 0) {
      inputName += name;
    } else {
      inputName += '[' + name + ']';
    }
  });
  var optionals = '';
  if (fieldsContainer.type === 'checkbox') {
    if (typeof fieldsContainer.value === 'string') {
      optionals += ' checked="checked"'
    }
    return '<div class="checkbox">'
      + '<label>'
      + '<input name="' + inputName + '" type="checkbox"' + optionals + '> ' + fieldsContainer.label
      + '</label>'
      + '</div>';
  } else {
    if (typeof fieldsContainer.value === 'string') {
      optionals += ' value="' + fieldsContainer.value + '"'
    }
    return '<div class="form-group">'
      + '<label for="' + idChain.join('_') + '">' + fieldsContainer.label + '</label>'
      + '<input type="' + fieldsContainer.type + '" class="form-control" id="' + idChain.join('_') + '" name="' + inputName + '"' + optionals + '>'
      + '</div>';
  }
}
formRow.safe = true;
swig.setFilter('formRow', formRow);

http.ServerResponse.prototype.render = function(templatePath, dataForTemplate, httpCode, header) {
    var path = this.services.findById('apolloTemplates').resolvePath(templatePath);
    var tpl = swig.compileFile(path);
    httpCode = httpCode || 200;
    dataForTemplate = dataForTemplate || {};
    var defaultHeader = {
      'Content-Type': 'text/html; charset=utf-8',
      'Server': 'ZeuJS/Apollo',
      'X-Powered-By': 'ZeuJS'
    };
    if (typeof header === 'object') {
      Object.keys(header).forEach(function(key) {
        defaultHeader[key] = header[key];
      });
    }
    this.writeHead(httpCode, defaultHeader);
    this.end(tpl(dataForTemplate));
};

module.exports = http;