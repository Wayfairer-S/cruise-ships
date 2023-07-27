const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')


describe("itinerary", () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
      
      const dover = jest.fn();
      const calais = jest.fn(); 

      // const dover = new Port('Dover');
      // const calais = new Port('Calais');

       const itinerary = new Itinerary([dover, calais]);

       expect(itinerary.ports).toEqual([dover, calais]);
    })
});