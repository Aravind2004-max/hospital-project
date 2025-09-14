const exp = require("express");
const mongo = require("mongoose");
const routes = require("./routes/hospitalRoutes");
const cors = require("cors");
const path = require("path");
const port = process.env.port || 3000;
const app = exp();

//middlewares
app.use(exp.json());
app.use(cors());
app.use(exp.static(path.join(__dirname, '../frontend/dist/frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/frontend/index.html'));
});

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