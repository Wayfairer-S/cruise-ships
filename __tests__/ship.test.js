const Ship = require('../src/ship.js')
const Itinerary = require('../src/itinerary.js')
const Port = require('../src/port.js')


describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const port = new Port('Dover');
        console.log(port)
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        
        console.log(ship)

        console.log(ship.itinerary.ports)

        expect(ship.currentPort).toBe(port);
    })

    it('can set sail', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
      
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port);
      });

      it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary);
      
        ship.setSail();
        ship.dock();
      
        expect(ship.currentPort).toBe(calais);
      })

});


