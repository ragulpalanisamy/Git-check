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

const users = require("./users");

const getUsersList = (req,res) => {
  res.json(users)
}

const getUser = (req,res) => {
  let {userId=""} = req.params;
  //Filtering the requested data from json
  let response = users.filter(obj => obj.id==userId);

  // If data present return 200 with the data
  if(response.length > 0) {
    res.status(200).json(response[0]);
  }
  //else return 400 with the error message
  else {
    res.status(400).json({
      success : false,
      message : "Bad Request. Given UserId is not present"
    })
  }
}

const authMiddleware = (req,res, next) => {
  const host = req.get('host');
  
  if(host.indexOf("repl1.co") > -1) {
    next()
  }
  else {
    res.status(401).json({
      "success" : false,
      "status" : "401",
      "message" : "Unauthorized Access"
    });
  }
}

module.exports = {
  getUsersList,
  getUser,
  authMiddleware
}

const express = require("express");

const {getUsersList, getUser, authMiddleware} = require("./usersController");

const userRouter = express.Router();

userRouter.get("/list",authMiddleware, getUsersList);
userRouter.get("/list/:userId",getUser);

module.exports = userRouter;

const users = [
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  },
  {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
  },
  {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
  },
  {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
  },
  {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
  },
  {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
  },
  {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/12-image.jpg"
  }
]

module.exports = users
  