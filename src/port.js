
function Port(name) {
    this.name = name
    this.ships = [];
}

Port.prototype.addShip = function (ship) {
    this.ships.push(ship);

}

Port.prototype.removeShip = function (queenMary) {
    this.ships.pop(queenMary);
}

module.exports = Port;