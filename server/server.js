import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`server is running on port: ${PORT}`);
});
