const path = require('path') // Built in module called path

// Path separator of the OS
console.log(path.sep);

// Join the Strings to generate a new String in path format
const filePath = path.join('contet','subfolder','text.txt')
console.log(filePath);


// returns the last name on the path use as argument
const base = path.basename(filePath)
console.log(base);

// returns a absolute path from a sequence of paths
const abosule = path.resolve(__dirname,'content','subfolder','text.txt') 
console.log(abosule);