const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const FITNESS_INCREASE = 4;
const AGE_AT_BIRTH = 0;
const AGE_INCREMENT = 1;
const MAXIMUM_AGE = 30;
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER = 0;
const NOT_HUNGRY = 0;

function Pet(name) {
  this.name = name;
  this.age = AGE_AT_BIRTH;
  this.hunger = NOT_HUNGRY;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
  get isAlive() {
    return this.age < MAXIMUM_AGE && this.hunger < 10 && this.fitness > 0;
  }
}

Pet.prototype.growUp = function () {
  if(this.isAlive) {
    throw new Error('Your pet is no longer alive');
  }
  this.age += AGE_INCREMENT;
  this.hunger += 5;
  this.fitness -= 3;
};

  Pet.prototype.walk = function() {
    if(this.isAlive) {
      throw new error('Your pet is no longer alive!')
    }
      this.fitness = Math.min(this.fitness + FITNESS_INCREASE, MAXIMUM_FITNESS);
  };

  Pet.prototype.walk = function() {
    if(this.isAlive) {
      throw new error('Your pet is no longer alive!')
    }
    this.age += AGE_INCREMENT;
    this.hunger += 5;
    this.fitness -= 3;
  };

  Pet.prototype.checkUp = function() { 
    const isHungry = (this.hunger >= 5);
    const needsWalk = (this.fitness <= 3);
  
    if (this.fitness <= 3 && this.hunger >= 5)
    { 
      return "I am hungry AND I need a walk";
    };
    if (this.fitness <= 3) {
      return "I need a walk";
    };
    if (isHungry) {
      return "I am hungry"
    };
      return "I feel great!"
  };

module.exports = Pet;