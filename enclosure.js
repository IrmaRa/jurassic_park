var Enclosure = function() {
  this.dinosaurs = [];
}

Enclosure.prototype = {
  count: function() {
    return this.dinosaurs.length;
  },

  addDinosaur: function(dinosaur) {
    this.dinosaurs.push(dinosaur);
  },

  removeByType: function(type) {
    for (var i = this.dinosaurs.length - 1; i >= 0; i--) {

      if(this.dinosaurs[i].type === type) {
        this.dinosaurs.splice(i, 1);
      }
    }
  },

  countOffspring: function() {
    var offspringMoreThanTwo = [];
    for(var dinosaur of this.dinosaurs) {
      if(dinosaur.offspring > 2) {
        offspringMoreThanTwo.push(dinosaur);
      }
    }
    return offspringMoreThanTwo;
  }

}

module.exports = Enclosure;