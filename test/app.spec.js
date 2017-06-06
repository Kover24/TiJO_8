'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
it ('should reverse number', function(){
  expect(app.reverseNumber(12345)).to.eql(54321);
});
  it ('should return false', function(){
    expect(app.reverseNumber()).to.eql(false);
  });
});

describe('returnOnlyLetter', function () {
  it('should return only letters', function () {
    expect(app.returnOnlyLetter('a7b6c2A3B5C123')).to.eql('abc');
  });
  it('should return false', function () {
    expect(app.returnOnlyLetter(123)).to.eql(false);
  });
});

describe('isEmail', function ()
{
  it('should return false', function () {
    expect(app.isEmail('bartlomiejklich.gmail')).to.eql(false);
  });
  it('should return true', function () {
    expect(app.isEmail('bartlomiejklich@gmail.com')).to.eql(true);
  });
});
