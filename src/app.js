import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes';
dotenv.config();

const app = express();
//middleware
app.use(cors());
app.use(express.json()); // json xử lý dữ liệu gửi lên
app.use(morgan('tiny')); // log http request gửi lên phía server

//router
app.use("/api", router);

//connect to database
const PORT = process.env.PORT || 8001
const DATABASE = process.env.DB
mongoose.connect(DATABASE)
    .then(() => console.log("connect database success"))
    .catch((error) => console.log(error));
app.listen(PORT , () =>   console.log(`Server is running:${PORT}`));