//importing the express 
const express = require("express");
//calling the express
const app = express()
const port=3000;

//passing a response to base route
app.get("/",(req,res)=>{
  res.send("Express is Started!..");
});

app.listen(port,()=>{
console.log(`Application is running in the port ${port}`);  
})
