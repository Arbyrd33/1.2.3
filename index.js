// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should receive a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age, pronoun, possessivePronoun) {
this.name = name,
this.age = age;
this.pronoun = pronoun;
this.possessive = possessivePronoun; 
this.stomach = [];
}
Person.prototype.eat = function(someFood){
  console.log(`${this.name} ate ${someFood}. mmm.`);
  if(this.stomach.length>=10){
    if(this.pronoun == 'he' || this.pronoun == 'she'){
      console.log(`${this.pronoun} wasn't very hungry. ${this.possessive} stomach is really full...`)
      } else {
        console.log(`${this.pronoun} aren't very hungry. ${this.possessive} stomach is really full...`)
      }
  } else {this.stomach.push(someFood);}
}
Person.prototype.poop = function(){
  this.stomach = [];
  console.log(`${this.name} spent some time on the toilet and feels much better.`)
}
Person.prototype.toString=function(){
  if(this.pronoun == 'he' || this.pronoun == 'she'){
    let string = `${this.name} is ${this.age} years old. ${this.pronoun} likes ${this.possessive} life.` 
    console.log(string);
    return string;
    } else if (this.pronoun == 'they'){
      let string = `${this.name} is ${this.age} years old. ${this.pronoun} like ${this.possessive} life.`
      console.log(string);
      return string;
    } else return `${this.name} is ${this.age}`;
}

const arbor = new Person(`arbor`, 23, `they`, `their`)
arbor.toString();
arbor.eat('carrots');
arbor.eat('an apple')
arbor.eat('jellybeans')
arbor.eat('a bagel')
arbor.eat('a clif bar (with espresso!)')
arbor.eat('their vitamins')
arbor.eat('their own words..')
arbor.eat('a whole bag of grapes')
arbor.eat('some more candy')
arbor.eat('a cookie')
arbor.eat('one (1) single crouton.')
arbor.poop();
arbor.eat(`a bag of nacho cheese-its`)
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
this.model = model;
this.milesPerGallon = milesPerGallon;
this.tank = 0;
this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  this.tank += gallons;
  console.log(`Topped up! The tank now has ${this.tank} gallons.`)
}
Car.prototype.drive = function(distance){
  this.odometer += distance;
  this.tank -= distance / this.milesPerGallon;
  console.log(`${this} drove ${this.distance} miles, and with a mileage of ${this.milesPerGallon} miles to the gallon, there are now ${this.tank.toFixed(2)} gallons left in the tank.`)
}

const florence = new Car(`smartCar`, 24);
florence.fill(25);
florence.drive(184);
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
Baby.prototype = Object.create(Person.prototype);
function Baby(name, age, favoriteToy, pronoun, possessive, ) {
Person.call(this, name, age, pronoun, possessive);
this.favoriteToy = favoriteToy;
}
Baby.prototype.play = function(){
  console.log(`${this.name} is playing with ${this.possessive} favorite toy, ${this.favoriteToy}.`)
  return `Playing with ${this.favoriteToy}`
}

const bea = new Baby('Beatrice', 2, `a feather wand`, `she`, `her`);
bea.play();
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
