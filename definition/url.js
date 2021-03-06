"use strict";

var UrlDefinition = function UrlDefinition(url) {
  this.url = url;
  this.routeParams = {};
  this.compileUrl()
};

UrlDefinition.prototype.compileUrl = function compileUrl() {
  var extractPlaceholders = new RegExp(':([a-zA-Z]+)', 'g');
  var routeSegment = '([a-zA-Z0-9_-]+)';
  var placeholder = null;
  while (placeholder = extractPlaceholders.exec(this.url)) {
    this.routeParams[placeholder[1]] = null;
  }
  var url = this.url
    .replace(/\[/g, '(?:')
    .replace(/]/g, ')?')
    .replace(extractPlaceholders, routeSegment);
  var preCompiledUrl = [
    '^',
    url,
    '$'
  ].join('');
  this.compiledUrl = new RegExp(preCompiledUrl);
};

UrlDefinition.prototype.matchRoute = function matchRoute(url) {
  var thisContext = this;
  var route = this.compiledUrl.exec(url.pathname);
  if (route === null) {
    return false;
  }
  var routeParamsKeys = Object.keys(this.routeParams)
  if (routeParamsKeys.length > 0) {
    route.forEach(function(element, i) {
      if (i > 0 && typeof element !== 'undefined') {
        thisContext.routeParams[routeParamsKeys.shift()] = element
      }
    });

  }
  return true;
};

module.exports = UrlDefinition;