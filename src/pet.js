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
  }

  Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= 10 ) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  }



module.exports = Pet;