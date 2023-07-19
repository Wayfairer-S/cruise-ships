function Ship() {
  this.startingPort = 'Dover'
};

Ship.prototype = {
    setSail() {
      this.startingPort = false;
    },
  };

module.exports = Ship;