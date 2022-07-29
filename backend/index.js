const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());


app.post("/api/v1/home", (req,res)=>{
    try{
        console.log(`Frontend sent ${req.body.userInput}`)
        res.status(200).json({
            status:200,
            message:"success",
            data:req.body
        })
    }catch(error){
        res.status(500).json({
            status:500,
            message:"error",
            data:error
        })
    }
} )

app.listen(8080,()=>{
    console.log("starting server on port 8080");
})