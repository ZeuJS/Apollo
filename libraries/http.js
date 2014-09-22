"use strict";
var http = require('http');
var swig  = require('swig');

http.ServerResponse.prototype.render = function(templatePath, dataForTemplate, httpCode) {
    var path = this.services.findById('apolloTemplates').resolvePath(templatePath);
    var tpl = swig.compileFile(path);
    httpCode = httpCode || 200;
    dataForTemplate = dataForTemplate || {};
    var header = {
        'Content-Type': 'text/html; charset=utf-8',
        'Server': 'ZeuJS/Apollo',
        'X-Powered-By': 'ZeuJS'
    };
    this.writeHead(httpCode, header);
    this.end(tpl(dataForTemplate));
};

module.exports = http;