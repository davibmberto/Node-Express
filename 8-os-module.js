const os = require('os') 
// It is not './os' otherwise it  would search for a external module.
// It's 'os' only because it's a built in module.

// info about current user
const user = os.userInfo()

console.log(user);

// method return the system uptime in seconds+
const uptime = os.uptime()
console.log(`The System uptime is ${uptime} seconds`);


const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);