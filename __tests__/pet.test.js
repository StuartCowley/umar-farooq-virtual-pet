const Pet = require('../src/pet.js');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Kalb')).toBeInstanceOf(Object);
  });
});

  describe('constructor', () => {
    it('sets the name property', () => {
      const pet = new Pet('Kalb');
  
      expect(pet.name).toEqual('Kalb');
    });
  });

});