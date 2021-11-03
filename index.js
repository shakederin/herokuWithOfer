const express = require("express");
// // const cors = require("cors");
// // const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
// const dataBaseUse = new DataBase;
// const myURL = "http://localhost:8080"

app.get("/", (req,res)=>{
    res.send("working?")
})
// app.use(cors());
 app.listen(port, ()=>{
     console.log("hi");
 })