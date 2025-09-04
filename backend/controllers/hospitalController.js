const pojo = require("../models/hospitalModel");

//get
const getDetails = async (req,res) =>{
    try{
        let datas = await pojo.find({},{_id:0,__v:0});
        res.status(200).json(datas);
    }catch(err){
        res.status(500).json({"err": err.message});
    }
}

//post
const insertDetails = async (req,res)=>{
    try{
        let datas = {
            id: req.body.id,
            name: req.body.name,
            diseases: req.body.diseases,
        }
        await pojo.create(datas);
        res.status(200).json("inserted");
    }catch(err){
        res.status(500).json({"err": err.message});
    }
}

//put
const updateDetails = async (req,res) => {
    try{
        let id = req.body.id;
        let datas = {
            name: req.body.name,
            diseases: req.body.diseases,
        }

        await pojo.updateOne({id:id},{$set:datas});
        res.status(200).json("updated");
    }catch(err){
        res.status(500).json({"err": err.message});
    }
}

//delete
const deleteDetails = async (req,res)=>{
    try{
        let id = String(req.params.id);
        console.log(id);
        await pojo.findOneAndDelete({id:id});
        res.status(200).json("deleted");
    }catch(err){
        res.status(500).json({"err": err.message});
    }
}

module.exports = {getDetails,insertDetails,updateDetails,deleteDetails};