//CommonJS, every file in node is a module (by default)
// MODULES - Encapsulated Code (Only share minimum)
// one file will be read, although it will call other module files to help

// require( 'where is the data (module)' )

// Importing Modules
const names = require('./4-names') 
const sayHi = require('./5-utils')

const data = require('./6-alternative-flavors')
const person = data.singlePerson
const items = data.items

require('./7-mind-grenade') // it imports the hole code, but encapsulated (only shares minimum)


//console.log(person);
//console.log(items);
//console.log(data);

//console.log(names);
//sayHi(names.n1)
//sayHi(names.n2)



// calls the module exports propertie and the functionalities within.
// eggxample: console.log('asdsad')


// sayHi('suzan')
// sayHi(n1)
// sayHi(n2)