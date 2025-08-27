const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write('<h1> Welcome to the Home Page </h1>')
        res.end()
    } else if(req.url ==='/about'){
        res.writeHead(404,{'content-type' : 'text/html'})
        res.write('<h1> This is an about page </h1>')
        res.end()
    }
    else if(req.url ==='/contact'){
        res.writeHead(404,{'content-type' : 'text/html'})
        res.write('<h1> contact us </h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'content-type' : 'text/html'})
        res.write('<h1> No resourse 404 error </h1>')
        res.end()
    }    
})
server.listen(3003,()=>{
    console.log("server is up and running")
})
console.log(server)