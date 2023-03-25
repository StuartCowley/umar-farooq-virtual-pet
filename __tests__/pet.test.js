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

  describe('constructor', () => {
    it('has an initial hunger of 0', () => {
      const pet = new Pet ('Kalb');

      expect(pet.hunger).toEqual(0);
    });
  });

  describe('fitness', () => {
    it("has an initial fitness of 10", () => {
      const pet = new Pet('Kalb');

      expect(pet.fitness).toEqual(10);

      it("decreases the fitness 3", () => {
        const pet = new Pet('Kalb');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
      });
    })
  })

  describe('walk', () => {
    it('increases fitness value by 4', () => {
      const pet = new Pet('Kalb');
      pet.fitness = 4;
      pet.walk();

      expect(pet.fitness).toBe(8);
      pet.walk();

      expect(pet.fitness).toBe(10);
    });
  })

  describe('feed', () => {
    it('decreases the hunger by 3', () => {
      const pet = new Pet('Kalb');

pet.hunger = 8;
pet.feed();

      expect(pet.hunger).toEqual(5);
    });
  })