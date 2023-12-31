import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import Movie from "./models/movies.js";
import {movie} from "./data/index.js";


/* Configurations */ 

const __filename =  fileURLToPath(import.meta.url); //grab the file url
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express(); //invoke express application
app.use(express.json()); //use the middleware
app.use(helmet()); //invoke helmet to be able to add security features such as setting HTTP headers appropriately 
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common")); //morgan will be logging HTTP requests with the predefined common format
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets'))); //set the directory of where we keep the assets of the images


/* file storage */

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/assets");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

/* Mongoose setup */

const PORT = process.env.PORT || 6001; //if the port doesn't work then 6001 will be the backup port
mongoose.connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, () => console.log('Server Port:', PORT));

    //add the data one time //test
    Movie.insertMany(movie);
}).catch((error)=> console.log(error,'did not connect'));