const path = require("path");
const url = require("url");
const renderView = require("../utils/view");

const userController = require("../controllers/userController")

function handleRoute(req,res){

    // console.log(
    //     "URL:",
    //     req.url,
    //     "Method:",
    //     req.method,
    //     "headersSent:",
    //     res.headersSent
    // );


    if(req.url.startsWith("/")){
        const filePath = path.join(__dirname,"../views/index.html");
        const data = {
            depan:"Course",
            belakang:"Net"
        };
        const html = renderView(filePath,data);
        res.writeHead(200,{
            "Content-Type":"text/html"
        });

        res.end(html);
        return true;
    }

    // /barang/SKU-001
    if(req.url==="/home"){
        const filePath = path.join(__dirname,"../views/home.html");
        const html = renderView(filePath);
        res.writeHead(200,{
            "Content-Type":"text/html"
        });

        res.end(html);
        return true;
    }

    if(req.url.startsWith("/list")){
        userController.getUser(req,res);
        return true;
    }

    if(req.url==="/add"){
        if(req.method==="GET"){
            userController.addForm(req,res);
            return true;
        }else{
            userController.submitAdd(req,res);
            return true;
        }
    }

    if(req.url.startsWith("/user")){
        const parseUrl = url.parse(req.url,true);
        
        const pathname = parseUrl.pathname;
    
        // kata user bisa diganti dengan path lainnya
        const userPattern =
            /^\/user\/(\d+)$/;

            // /user/2000
    
        const match =
            pathname.match(userPattern);
    
        if(match){
            const id = match[1];
    
            userController.parameter(req,res,id);
            return true;
        }
    
        if (parseUrl.query.id !== null ) {
            
            userController.queryString(req,res,parseUrl.query.id);
            return true;
        }
    }

    return false;
}

module.exports = {
    handleRoute
};