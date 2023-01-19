exports.word = 'everyone';
exports.name = 'Ryan Anderson'
// EXPORTS is a JavaScript/Node Object and adding the "experts.{name} you are just assigning it's name"
// assigning a value to the object name 'everyone' is exactly just assigning it a value

const magicNumber = 13;

exports.mysteryMultiplier = function(num){

    return num * magicNumber
}
// Can also export a module as a function 
//can have a local variable in 1 file that gives function logic however what would not be seen from the main file

// module.exports = {
//     word : function(){
//         return 'everyone';
//     },

//     name : function() {
//         return 'Ryan Anderson';
//     },

//     mysteryMultiplier : function(num){
//         num * magicNumber;
//     }
// }
//The above module object is the same as writing the code above the object