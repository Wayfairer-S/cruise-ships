const Itinerary = require('../src/itinerary.js');
const Port = require('../src/port.js')


describe('Port', () => {
   let port;
   let ship;
   let titanic;
   let queenMary;
   let itinerary;
   let dover;
   let calais;
 
   beforeEach(() => {
      port = new Port('Dover');
      calais = new Port('Calais')
      itinerary = new Itinerary([dover, calais]);
      titanic = {};
      queenMary = {};
      const ship = jest.fn()

    });

 it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
 });

 it('has a name', () => {


  expect(port.name).toBe('Dover');
 })

 it("adds a ship", () => {

   const ship = jest.fn();

   port.addShip(ship);

   expect(port.ships).toContain(ship);

 })

 it("removes a ship" , () => {
  
   const ship = jest.fn();
    
   port.addShip(titanic);
   port.addShip(queenMary);
   port.removeShip(queenMary);
   
   expect(port.ships).toEqual([titanic]);
 });

});
