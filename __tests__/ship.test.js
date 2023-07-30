const Ship = require('../src/ship.js');
const Itinerary = require('../src/itinerary.js');
const Port = require('../src/port.js');

describe('with ports and an itinerary', () => {
  let dover;
  let calais;
  let itinerary;
  let ship;

  beforeEach(() => {
    dover = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: 'Dover',
      ships: []
    };

    calais = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: 'Calais',
      ships: []
    };

   itinerary = {
    ports: [dover, calais]
   };

    ship = new Ship(itinerary); 
  });

  it('can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(dover);
  });

  it('can set sail', () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(dover.removeShip).toHaveBeenCalledWith(ship);
  });

  it('gets added to port on instantiation', () => {
    expect(dover.addShip).toHaveBeenCalledWith(ship);
  });

  describe('port tests', () => {
    it('can dock at a different port', () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(calais);
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });

    it('can\'t sail further than its itinerary', () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError('End of itinerary reached.');
    });
  });
});
