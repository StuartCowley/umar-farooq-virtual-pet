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
  
  describe('constructor', () => {
    it('has a initial age of 0', () => {
      const pet = new Pet('Kalb');
  
      expect(pet.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Kalb');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
  });