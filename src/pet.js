const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const FITNESS_INCREASE = 4;
const AGE_AT_BIRTH = 0;
const AGE_INCREMENT = 1;
const MAXIMUM_AGE = 30;
const MAXIMUM_HUNGER = 10;
const NOT_HUNGRY = 0;

function Pet(name) {
  this.name = name;
  this.age = AGE_AT_BIRTH;
  this.hunger = NOT_HUNGRY;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
  get isAlive() {
    return (
      this.age < MAXIMUM_AGE &&
      this.hunger < MAXIMUM_HUNGER &&
      this.fitness > MINIMUM_FITNESS
    );
  }
};

Pet.prototype.growUp = function () {
  if(!this.isAlive) {
    throw new Error('Your pet is no longer alive!')
  }
  this.age += AGE_INCREMENT;
  this.hunger += 5;
  this.fitness -= 3;

};

  Pet.prototype.walk = function() {
    if(!this.isAlive) {
      throw new Error('Your pet is no longer alive!')
    }
      this.fitness = Math.min(this.fitness + FITNESS_INCREASE, MAXIMUM_FITNESS);
  };

  Pet.prototype.feed = function () {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive!')
    };
        this.hunger = Math.max(this.hunger - 3, NOT_HUNGRY)
  };

  Pet.prototype.checkUp = function() {
    if(!this.isAlive) {
      throw new Error('Your pet is no longer alive!');
    }

    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk!";
    }
    if (this.fitness <= 3) {
      return "I need a walk!";
    }

    if (this.hunger <= 3) {
      return "I am hungry!"
    };

      return "I feel great!"
  };

module.exports = Pet;