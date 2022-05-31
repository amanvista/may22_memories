import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();
app.use("/posts", postRoutes)
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


let CONNECTION_URL = "mongodb://localhost:27017/Ecommerce"
let PORT = 5001
//const mongoose = require('mongoose');
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.connect('mongodb://localhost:27017/Ecommerce', (err)=>{
//       if(!err) console.log("DB Connected")
//       else
//       console.log("DB Error")
//   });