function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = FITNESS_START;
    this.growUp = function() {
      this.age += 1;
    };
  }

module.exports = Pet;