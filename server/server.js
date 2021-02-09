import express from 'express';
import config from './config/config.js';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import upload from './routes/upload.js';

// Setup Server
const app = express();
app.listen(config.port, () => {
  console.log(`server is running on port: ${config.port}`);
});

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Connecting to mongoDB
connectDB();

// Routes
app.use('/user', userRouter);
app.use('/api', categoryRouter);
app.use('/api', upload);
