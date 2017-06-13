var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Enclosure = require('../enclosure.js');


describe('Enclosure', function() {

  var enclosure;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function() {
    enclosure = new Enclosure();
    dinosaur1 = new Dinosaur({type: 'Tyrannosaurus', offspring: 3});
    dinosaur2 = new Dinosaur({type: 'Velociraptor', offspring: 2});
    dinosaur3 = new Dinosaur({type: 'Triceratops', offspring: 5});
  });

  it('should start empty', function() {
    assert.strictEqual(0, enclosure.count());
  });

  it('should be able to add dinosaur', function() {
    enclosure.addDinosaur(dinosaur1);
    assert.strictEqual(1, enclosure.count());

  })
});

// should be able to remove all dinosaurs of a particular type
// should get all the dinosaurs with an offspring count of more than 2