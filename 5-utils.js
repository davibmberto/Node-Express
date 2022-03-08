const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

module.exports = sayHi
// there are no (), because the () are used when calling a function
// that is why, in this case, the exports object, wich shares things with the other modules is only receiving the

