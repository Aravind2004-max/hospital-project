const exp = require("express");
const mongo = require("mongoose");
const routes = require("./routes/hospitalRoutes");
const cors = require("cors");
const port = process.env.port || 3000;
const app = exp();

//middlewares
app.use(exp.json());
app.use(cors());
app.use("/hospital",routes);

//database connection part
mongo.connect("mongodb://localhost:27017/hospitalDatas").then(
    ()=>{
        console.log("DB connection : Success ");
        console.log(mongo.connection.name);
    }
).catch((Error)=>{
    console.log("DB connection : "+Error.message);
});

//server starting part
app.listen(port,(Error)=>{
    if(Error){
        console.log("Can't connect the Server : "+Error.message);
        return;
    }
    console.log(`Server started on PORT : ${port} `);
});