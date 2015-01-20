"use strict";

function EmailValidator(email) {
  //use simplified RFC 2822
  var emailRegexString = [
    '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/',
    '=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)',
    '+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?'
  ].join('');
  var emailRegex = new RegExp(emailRegexString);
  if (!emailRegex.test(email)) {
    throw 'Email not valid';
  }
  this.email = email;
}
EmailValidator.prototype.valueOf = function () {
  return this.email;
};
module.exports = {
  id: "Email",
  type: EmailValidator
};