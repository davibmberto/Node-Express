// cria uma const associada com o nome da propriedade do objeto que se pretende utilizar
//const { nomeDaPropriedade } = obj
const { readFileSync, writeFileSync } = require('fs')

console.log('start')


// Mesma coisa que o código acima
// const fs = require('fs')
// console.log(fs.readFileSync());

// readFileSync( path, enconding)
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


//console.log(first);
//console.log(second);

// writeFileSync( 'Path + fileName', fileContent, {flag:'a'} ) IF FLAG IS SET TO 'a' THE CONTENT WILL BE APPENDED AND NOT OVERWRITEN
// Writes over the existing file or creates one if there is none

writeFileSync('./content/third.txt', `Here is the result: ${first}, ${second}`, {flag:'a'})

console.log('Done with this task');
console.log('starting the next one');
