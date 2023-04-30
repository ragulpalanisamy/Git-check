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


const express = require("express");
const { random, get } = require("lodash");
const moment = require("moment");

const app = express();

app.use(express.json());

const port = 6000;

app.get("/", (req, res) => {
  res.send("Express is started!..");
});

app.post("/api/users", (req, res) => {
  //getting the host name
  const host = req.get("host");
  console.log(`host name: ${host}`);
  //get the url
  const url = req.originalUrl;
  console.log(`url: ${url}`);
  const body = get(req, "body", {});
  console.log(body);

  let response = {
    ...body,
    id: random(1, 1000),
    createdAt: moment().toDate(),
  };

  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});

/* 
const express = require("express");
const { random, get} = require("lodash");
const moment = require("moment");
//creates an express application
const app = express();
//attaching express.json middleware
app.use(express.json());

const port = 6000;

//res sending using get method
app.get("/", (req, res) => {
  res.send("Express is started!..");
});

//response create using post method
app.post("/api/users", (req, res) => {
 
  const {body} = get(req,"body", {});//[requestPayload = req.body];
  console.log(body);
  
  /* let payload="";

  res.on('data',(chunck)=>{
    payload+=chunck;
  })

  req.on('end',()=>{
    let parsedPayload = JSON.parse(payload);
    console.log(parsedPayload);
 
    let response ={
      ...body,
      id : random(1,1000),
      createdAt : moment().toDate()
    }
        //res.send(response);
  res.status(200).json(response);
  });
  


app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});


 */
const express = require("express");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use("/api",router);
app.listen(8000,()=>{
  console.log("Server is up and Running")
})
const movies = require("./movies.json")
const fs = require("fs");
const fileName = './file.json';

const getMoviesList = (req,res) =>{
 res.json(movies);
}

const addMovies = (req,res) =>{
  const {body={}} = req;
  movies.push(body);
  fs.writeFileSync("/movies.json", JSON.stringify(movies));
  res.send(movies)
}

module.exports = {
  getMoviesList,
  addMovies
}

const express = require("express");

const {getMoviesList,addMovies} = require("./moviesController");

const router = express.Router();

router.get("/list",getMoviesList)
router.post("/add",addMovies)

module.exports = router;
const users = require("./users.js")

const getUsersList = (req, res) => {
  res.send(users);
}

module.exports = {
  getUsersList
}