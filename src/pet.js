const MAXIMUM_FITNESS = 10;
const AGE_AT_BIRTH = 0;
const NOT_HUNGRY = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.growUp = function() {
    this.age += 1;
    };
    this.hunger = NOT_HUNGRY;
  }

  Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= 10 ) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  }

  if (this.fitness <= 3) {
  return "I need a walk";
  }

  checkUp() {
    const isHungry = (this.hunger >= 5);
    const needsWalk = (this.fitness <= 3);

  Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive')
    }
    If (this.fitness <= 3 && this.hunger >= 5)
    { 
      return "I am hungry AND I need a walk";
    };
  };
  
module.exports = Pet;