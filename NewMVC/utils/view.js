const fs = require("fs");

function renderView(filePath,data={}){
    let html = fs.readFileSync(
        filePath,
        "utf-8"
    );

    Object.keys(data).forEach(key=>{
        html = html.replaceAll(`{{${key}}}`,data[key]);
    });

    return html;
}

module.exports = renderView;