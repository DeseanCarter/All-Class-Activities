// TODO: Add a comment describing what kind of function this is
// This is called a Constructor Function
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// The prototype allows you to set attributes to the constuctor functions parameters
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
// This logic allows users to see a message if a conditional is made. IE hitpoints
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
// Determines the second characters strength based on hitpoints
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
// Determines if a character is able to level up at that time
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
// Stats of new Warrior Crusher
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
// Shows is Crusher is still alive, and his level up
warrior.isAlive();

rogue.levelUp();
console.log(rogue.levelUp())

// TODO: Add a comment describing what you expect to see printed in the console
// undefined
rogue.printStats();
console.log(rogue.printStats())

