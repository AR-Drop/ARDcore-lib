'use strict';

var should = require('chai').should();
var ARDcore = require('../');

describe('#versionGuard', function() {
  it('global._ARDcore should be defined', function() {
    should.equal(global._ARDcore, ARDcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      ARDcore.versionGuard('version');
    }).should.throw('More than one instance of ARDcore');
  });
});
