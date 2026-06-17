const userController = require("../controllers/userController");
const path = require("path");
const url = require("url");
const renderView = require("../util/view");

function handleRoute(req,res){

    if(req.url.startsWith("/data")){
        console.log("====masuk ke /user"+req.url);
        const parseUrl = url.parse(req.url,true);
        
        const pathname = parseUrl.pathname;
    
        // kata user bisa diganti dengan path lainnya
        const userPattern =
            /^\/data\/(\d+)$/;
    
        const match =
            pathname.match(userPattern);
    
        console.log(match+"========");
    
        if(match){
            const id = match[1];
    
            return userController.parameter(req,res,id);
        }
    
        if (parseUrl.query.id !== null ) {
            
            return userController.queryString(req,res,parseUrl.query.id);
        }
    
        res.writeHead(404);
        res.end("Route tidak ditemukan");
    }

    if(req.url==="/users"){
        console.log("User")
        userController.home(req,res);
    }else if(req.url==="/list"){
        userController.getUser(req,res);
    }else if(req.url === "/home"){
        const filePath = path.join(__dirname,"../views/home.html");

        const html = renderView(filePath);

        res.writeHead(200,{
            "Content-Type":"text/html"
        });

        res.end(html);
        return true;
    }else if(req.url === "/add" && req.method === "GET"){
        userController.addForm(req,res);
        return true;
    }else if(req.url==="/add"&& req.method==="POST"){
        userController.submitAdd(req,res);
    } 
    
    return false;
    
}

module.exports = {handleRoute};

// url : www.abc.com/user/add
// url : www.abc.com/user/edit/1
// url : www.abc.com/admin/add => GET
// url : www.abc.com/admin/edit/1 => GET
// url : www.abc.com/user/view?id=10 => GET
// query string => id = 10