const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

const cors = require("cors")
require('dotenv').config();

const port = process.env.PORT || 8000;

//connect to database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, () => {
    console.log("database connected!");
});

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})