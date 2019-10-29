/* Import npm module */
validator = require('validator');
/* Importing own notes.js module */
getNotes = require('./notes.js');

console.log(getNotes());
console.log(validator.isEmail("basha@nayab.xyz"));
