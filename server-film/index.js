const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
var bodyParser = require('body-parser')

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

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})