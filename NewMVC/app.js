const http = require("http");

const userRoute = require("./routes/route");

const server = http.createServer((req,res)=>{
    const handled = userRoute.handleRoute(req,res);

    if(!handled){
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<h1>404 Not Found</h1>");
    }
});

server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
});