
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

mongoose.set('strictQuery', false);

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).send(`<h1>Elissa NTIHINDUKA API</h1>`);
});

let con = mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    wtimeoutMS: 30000,
});

if (con) {
    console.log('Database has been connected');
}

export default app;
