import jwt from 'jsonwebtoken';

import userDb  from './models/userDb.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import bodyParser  from 'express';
import router from './routes/users.js'
import utils from './utils.js'

dotenv.config()
const app=express();
const port=process.env.PORT||5000;

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());
app.use(express.json());

app.use('/',router);
const url=process.env.ATLAS_URI;



    // const userData = {
    //     userId: "789789",
    //     password: "123456",
    //     name: "Clue Mediator",
    //     username: "cluemediator",
    //     isAdmin: true
    //   };

      app.use(function (req, res, next) {
        // check header or url parameters or post parameters for token
        var token = req.headers['authorization'];
        if (!token) return next(); //if no token, continue
       
        token = token.replace('Bearer ', '');
        jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
          if (err) {
            return res.status(401).json({
              error: true,
              message: "Invalid user."
            });
          } else {
            req.user = user; //set the user to req so other routes can use it
            next();
          }
        });
      });
       
       
      // // request handlers
      // app.get('/', (req, res) => {
      //   if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
      //   res.send('Welcome to the Node.js Tutorial! - ' + req.user.name);
      // });
       
       
      // validate the user credentials
      app.post('/users/signin', function (req, res) {
        console.log(req.body);
        const user = req.body.username;
        const pwd = req.body.password;
       
        // return 400 status if username/password is not exist
        if (!user || !pwd) {
          return res.status(400).json({
            error: true,
            message: "Username or Password required."
          });
        }
       
        userDb.findOne({email:user})
        .then((user)=>{

          if(!user){
            res.status(404).json({"message":"User not found"});
          }
          else{
           
            if(user.password===pwd){
                      // generate token
              const token = utils.generateToken(user);
         // get basic user details
             const userObj = utils.getCleanUser(user);
         // return the token along with user details
             return res.json({ user: userObj, token });
              //res.status(200).json({"message":"User found"});
            }
            else{
              res.status(404).json({"message":"Wrong password"});
            }
          }
        })
        // return 401 status if the credential is not match.
        // if (user !== userData.username || pwd !== userData.password) {
        //   console.log("data not match");
        //   return res.status(401).json({
        //     error: true,
        //     message: "Username or Password is Wrong.",
            
        //   });
        // }
       
        // generate token
        // const token = utils.generateToken(userData);
        // // get basic user details
        // const userObj = utils.getCleanUser(userData);
        // // return the token along with user details
        // return res.json({ user: userObj, token });
      });
       
       
      // verify the token and return it if it's valid
      app.get('/verifyToken', function (req, res) {
        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token;
        if (!token) {
          return res.status(400).json({
            error: true,
            message: "Token is required."
          });
        }
        // check token that was passed by decoding token using secret
        jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
          if (err) return res.status(401).json({
            error: true,
            message: "Invalid token."
          });
       
          // return 401 status if the userId does not match.
          // if (user._Id !== userData.userId) {
          //   return res.status(401).json({
          //     error: true,
          //     message: "Invalid user."
          //   });
          // }
          // get basic user details
          var userObj = utils.getCleanUser(user);
          console.log(userObj);
          return res.json({ user: userObj, token });
        });
      });


      mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(port,()=>{
            console.log("Database connected and Server is running on PORT: "+port);
        })
    })
    .catch((err)=>{
		console.log(err);
		});

    mongoose.set('useFindAndModify',false);



