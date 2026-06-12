const userController = require("../controllers/userController");
const path = require("path");
const renderView = require("../util/view");

function handleRoute(req,res){
    if(req.url==="/user"){
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
    }else if(req.url === "/add" && req.method === "GET"){
        userController.addForm(req,res);
    }else if(req.url==="/add"&& req.method==="POST"){
        userController.submitAdd(req,res);
    }
}

module.exports = {handleRoute};

// url : www.abc.com/user/add
// url : www.abc.com/user/edit/1
// url : www.abc.com/admin/add => GET
// url : www.abc.com/admin/edit/1 => GET
// url : www.abc.com/user/view?id=10 => GET
// query string => id = 10