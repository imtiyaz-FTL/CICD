const express=require("express");
const app= express();
const mongoose= require("mongoose");
const http=require("http");
const server=http.createServer(app);
const cors=require("cors");
const { APP_PORT,DB_URL,}=require("./config");

app.get("/ping", (req, res) => {
    res.send("PONG");
  });


  app.get("/getApi",async(req,res)=>{
    res.status(200).json({
        success:true,
        message:"api is working fine....."
    })
  })

  //   server connection 
  server.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
  });

  //   databse connection 
  mongoose
  .connect(DB_URL, {
   
  })
  .then(() => {
    console.log("DB connected...");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });