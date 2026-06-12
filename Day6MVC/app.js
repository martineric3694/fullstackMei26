const http = require("http");

const userRoute = require("./routes/userRoute");

const server = http.createServer((req,res)=>{
    const handled = userRoute.handleRoute(req,res);

    // if(!handled){
    //     res.writeHead(404,{"Content-Type":"text/html"});
    //     res.end("<h1>404 Not Found</h1>");
    // }
    // res.writeHead(200, { 'Content-Type': 'text/plain' });

    // // Send the response body as 'Hello, World!'
    // // res.end('Hello, World!\n');

    // if(req.url === "/"){
    //     res.end("Halaman Index");
    // }else if(req.url === "/admin"){
    //     res.end("Admin Page");
    // }
});

server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
});