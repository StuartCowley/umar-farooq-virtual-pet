function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.growUp = function() {
      this.age += 1;
    };
  }

module.exports = Pet;