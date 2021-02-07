import express from 'express';
import config from './config/config.js';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.listen(config.port, () => {
  console.log(`server is running on port: ${config.port}`);
});
