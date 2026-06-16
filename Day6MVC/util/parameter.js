const url = require('url');
const path = require("path");

const userController = require("../controllers/userController");

function routeExtract(req,res){
    const parseUrl = url.parse(req.url,true);

    const pathname = parseUrl.pathname;

    // kata user bisa diganti dengan path lainnya
    const userPattern =
        /^\/user\/(\d+)$/;

    const match =
        pathname.match(userPattern);

    console.log(match+"========");

    if(match){
        const id = match[1];

        return userController.parameter(req,res,id);
    }

    // if (pathname === "/user") {

    //     return userController.queryString(req,res,parseUrl.query);
    // }

    res.writeHead(404);
    res.end("Route tidak ditemukan");
}

module.exports = {routeExtract};