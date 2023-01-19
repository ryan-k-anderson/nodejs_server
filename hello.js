const myWord = require('./hello2.js');
const dog = require('./dog.js');
//REQUIRE is a node function where it will bring in outside code
// takes a string with the relative pathing since "hello2" is in the same directory


function sayHello() {
    console.log('Hello ' + myWord.word + ', this is ' + myWord.name)
};
//myWord calls the local variable while ".word" calls the name of the export in hello2 file ame with the ".name"
// Reference hello2.js

sayHello();
// This is a simple function and that can be executed with node as well for server side JavaScript
// in command prompt (Windows) go to the directory the file is saved to.
// Type "node {filename) and hit ENTER"

console.log(myWord.mysteryMultiplier(10));
// calling the "squarer" module which is noted in hello2 as a function

console.log(dog.bark())