const { readFile, writeFile } = require('fs')

// async methods will need to use callbacks ( method run inside another method at the end)

// readFile( path, callbackFunction )

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    //this is where functionalities would be set up
    const first = result

    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result
        
        writeFile('./content/result-async.txt', `Async Writing: ${first}, ${second}`, (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })

    })
})
console.log('starting the next one');