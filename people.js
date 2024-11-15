const { fullNames } = require('./names.js');
const {hobbies} = require("./hobbies.js")

const completeName = fullNames("Alessandro", "Puglisi");
console.log(completeName); 

const hobby = hobbies("calcio", "Pokemon", "tennis")
console.log(hobby)