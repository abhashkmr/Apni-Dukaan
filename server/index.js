import express  from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import bodyParser  from 'express';
import router from './routes/users.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());
app.use(express.json());


const url=process.env.ATLAS_URI;

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

app.use('/',router);