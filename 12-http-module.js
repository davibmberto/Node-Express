//Grabbing the built in http module with require method
const http = require('http')

// http.createServer( (objRequest, objResponse) => { } )


// Setting up server with createServer()
const server = http.createServer((request, response)=>{

    if(request.url === '/'){
        response.end('WELCOME TO THE HOMEPAGE')
    }
    if(request.url === '/about'){
        response.end('ABOUT ENDPOINT ACCESSED')
    }
    response.end('RESOURCE NOT FOUND')
})

// Port where the server will listen for requests
server.listen(5000)