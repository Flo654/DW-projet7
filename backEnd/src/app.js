/////////////////////////////////////////
////// import dependancies modules///////
////////////////////////////////////////
import express  from "express";
import bodyParser from "body-parser";
import path from 'path';
import bcrypt from 'bcrypt'

////////////////////////////////////////
////// import security modules /////////
////////////////////////////////////////
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';


////////////////////////////////////////
//////// utils & routes import /////////
////////////////////////////////////////
import userRoutes from "../src/routes/user";
import messageRoutes from "../src/routes/message";


const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // limit each IP to 50 requests per windowMs
    message: "Too many requests, please try again after 15 minutes"
});
//app.use(limiter);
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());


app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes)



export default app;