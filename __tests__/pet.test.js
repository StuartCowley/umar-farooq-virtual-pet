const Pet = require('../src/pet.js');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Kalb')).toBeInstanceOf(Object);
  });
});

  describe('Pet has a name property', () => {
    it('returns the name of the specified pet', () => {
      const pet = new Pet('Kalb');
  
      expect(pet.name).toEqual('Kalb');
    });
  });
  
  describe('growUp', () => {
    it('has a initial age of 0', () => {
      const pet = new Pet('Kalb');
  
      expect(pet.age).toEqual(0);
    });

    it('increments the age by 1', () => {
      const pet = new Pet('Kalb');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
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

describe('checkUp', () => {
  it('checks how pet is feeling', () => {
    const pet = new Pet('Kalb');
    pet.hunger = 5;

    expect(pet.checkUp()).toBe('I am hungry');
    pet.hunger = 0;
    pet.fitness = 3;

    expect(pet.checkUp()).toBe('I need a walk!');
    pet.hunger = 5;
    pet.fitness = 3;

    expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    pet.hunger = 0;
    pet.fitness = 10;

    expect(pet.checkUp()).toBe('I feel great!');
  });