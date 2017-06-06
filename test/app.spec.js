'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
it ('should reverse number', function(){
  expect(app.reverseNumber(12345)).to.eql(54321);
});
});

describe('returnOnlyLetter', function () {
  it('should return only letters', function () {
    expect(app.returnOnlyLetter('a7b6c2A3B5C123')).to.eql('abc');
  });
});

describe('isEmail', function ()
{
  it('should return false', function () {
    expect(app.isEmail('bartlomiejklich.gmail')).to.eql(false);
  });
});
