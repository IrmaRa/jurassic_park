var Enclosure = function() {
  this.dinosaurs = [];
}

Enclosure.prototype = {
  count: function() {
    return this.dinosaurs.length;
  }
}



module.exports = Enclosure;