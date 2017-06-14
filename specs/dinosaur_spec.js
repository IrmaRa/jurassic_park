var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  var dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur({type: 'Tyrannosaurus', offspring: 3});
  });

  it('should have a type', function() {
    assert.strictEqual('Tyrannosaurus', dinosaur.type);
  });

  it('should have a offspring number', function() {
    assert.strictEqual(3, dinosaur.offspring);
  });

});