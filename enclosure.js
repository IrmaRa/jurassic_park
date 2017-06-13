var Enclosure = function() {
  this.dinosaurs = [];
}

Enclosure.prototype = {
  count: function() {
    return this.dinosaurs.length;
  },

  addDinosaur: function(dinosaur) {
    this.dinosaurs.push(dinosaur);
  }
}



module.exports = Enclosure;