const MAXIMUM_FITNESS = 10;
const AGE_AT_BIRTH = 0;
const NOT_HUNGRY = 0;

function Pet(name) {
  this.name = name;
  this.age = AGE_AT_BIRTH;
  this.hunger = NOT_HUNGRY;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  }
}

Pet.prototype.growUp = function () {
  if(!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
  return 'Back in my day ... vets were not a thing';
}

  Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= 10 ) {
      this.fitness += 4;
  }
  }

  Pet.prototype.walk = function() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
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
      if (isHungry)
      {
        return "I am hungry"
      };

        return "I feel great!"
  };

module.exports = Pet;