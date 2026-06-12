const userModel = require("../models/userModel");

const path = require("path");
const renderView = require("../util/view");

function home(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("UserController Page");
}

function getUser(req,res){
    
    const result = userModel.getAllUser();
    let data = "";
    result.forEach(user=>{
        data+=
        `<tr>
            <td>${user.id}</td>
            <td>${user.nama}</td>
            <td>${user.jabatan}</td>
        </tr>`
        ;
    });

    const filePath = path.join(__dirname,"../views/user.html");
    const html = renderView(filePath,{data});
    
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(html);
}

function addForm(req,res){
    const filePath = path.join(__dirname,"../views/addUser.html");
    const html = renderView(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(html);
}

function submitAdd(req,res){
    let body = "";
    req.on(
        "data",
        chunk => {
            body += chunk.toString();
        }
    );

    req.on("end",()=>{
        const param = new URLSearchParams(body);

        const id = param.get("id");
        const nama = param.get("nama");
        const jabatan = param.get("jabatan");

        let addData = {
            id:id,
            nama:nama,
            jabatan:jabatan
        };

        const addedUser = userModel.addUser(addData);

        let data = "";
        addedUser.forEach(user=>{
            data+=
            `<tr>
                <td>${user.id}</td>
                <td>${user.nama}</td>
                <td>${user.jabatan}</td>
            </tr>`
            ;
        });

        const filePath = path.join(__dirname,"../views/user.html");
        const html = renderView(filePath,{data});
        
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(html);
    });
    
}

module.exports= {
    home,
    getUser,
    addForm,
    submitAdd
};