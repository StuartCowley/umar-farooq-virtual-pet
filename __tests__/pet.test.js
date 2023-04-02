const Pet = require('../src/pet.js');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Kalb')).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
    const pet = new Pet('Kalb');
    expect(pet.name).toEqual('Kalb');
    });
  });

    it('has a initial age of 0', () => {
      const pet = new Pet('Kalb');
  
      expect(pet.age).toEqual(1);
    });

    it('has an initial hunger of 0', () => {
      const pet = new Pet('Kalb');
      pet.growUp();

      expect(pet.hunger).toEqual(5);
    })

    it('has initial fitness of 10', () => {
      const pet = new Pet('Kalb');
      pet.growUp();

      expect(pet.fitness).toEqual(7);
    })

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('Kalb');

      pet.fitness = 8;
      pet.walk();

      expect(pet.fitness).toEqual(8);
    });

    it('increases fitness to a maximum of 10', () => {
      const pet = new Pet('Kalb');
      pet.fitness = 4;
      pet.walk();

      expect(pet.fitness).toEqual(8);
    });

    it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Kalb');
    pet.age = 30;

    expect (() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });
});

describe('feed', () => {
  it('prevents hunger level from going below 0', () => {
    const pet = new Pet('Kalb');
    pet.hunger = 1;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });
})

it('reduces the hunger value by the correct amount', () => {
const pet = new Pet('Kalb');
pet.hunger = 8;
pet.feed();

expect (pet.hunger).toEqual(5);
});

it('throws an error if the pet is not alive', () => {
  const pet = new Pet('Kalb');
  pet.age = 30

  expect(() => pet.feed()).toThrow('Your pet is no longer alive!')
});

describe('grow up', () => {
  it('increases the age of the pet in increaments of 1', () => {
    const pet = new Pet('Kalb');
    pet.growUp();

    expect(pet.age).toEqual(1);
  })

  it('throws an error if the pet is not alive', () => {
  const pet = new Pet('Kalb');
  pet.age = 30

  expect(() => pet.growUp()).toThrow('Your pet is no longer alive!')
});

describe('checkUp', () => {
  it('returns I need a walk if fitness is less than 3', () => {
    const pet = new Pet('Kalb');
    pet.fitness = 3;
    pet.checkUp();

    expect(pet.checkUp()).toBe('I need a walk!');

    it('returns I am hungry! if hunger is greater than or equal to 5')
    const pet = new Pet('Kalb');
    pet.hunger = 0;
    pet.fitness = 3;

    expect(pet.checkUp()).toBe('I am hungry');
    });
    it('returns I am hungry! and I need a walk if fitness is 3 or less AND hunger is 5 or more', () => {
      const pet = new Pet('Kalb');
      pet.hunger = 5;
      pet.fitness = 3;
      pet.checkUp();
      
      expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

it('if neither fitness or hunger are true then return I feel great!', => () {
  const pet = new Pet('Kalb');
  pet.fitness = 4;
  pet.hunger = 4;
  pet.checkUp();
  
  expect(pet.checkUp()).toBe('I feel great!');
  });

  it('it throws an error if the pet is not alive', () => {
    const pet = new Pet ('Kalb');
    pet.age = 30;

    expect(() => pet.checkUp()).toThrow('Your pet is no longer alive');
  })