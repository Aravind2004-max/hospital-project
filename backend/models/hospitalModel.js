const mongo = require("mongoose");

const patientSchema = mongo.Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    diseases:{
        type:String,
        required:true,
    }
});

const schema = mongo.model("patientDetails",patientSchema);

module.exports = schema;