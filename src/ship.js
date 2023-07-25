function Ship (itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
}
Ship.prototype.setSail = function () {
      this.previousPort = this.currentPort;
      this.currentPort = null;

  };

Ship.prototype.dock = function () {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

  this.currentPort = itinerary.ports[previousPortIndex + 1];
};



module.exports = Ship;