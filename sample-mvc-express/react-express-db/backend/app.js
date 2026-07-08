const express = require("express");
const cors = require("cors");
const db = require("./config/database");

const Employee = require("./models/employee");

const employeeRoute = require("./routes/employeeRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{

    res.json({
        message:"Backend Running"
    });

});
app.use("/employees",employeeRoute);

db.authenticate()
.then(()=>{

    console.log("Database Connected");

})
.catch(err=>{

    console.log(err);

});

db.sync();

app.listen(3000,()=>{

    console.log("Server running");

});