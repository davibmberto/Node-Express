// local
const secret = 'SUPER SECRET'
//  share
const n1 = 'john'
const n2 = 'peter'

//console.log(module);
// 'exports' object property shares everything in it to anywhere in the application

console.log(n1)

module.exports = { n1, n2 }
//Making n1 and n2 shareable