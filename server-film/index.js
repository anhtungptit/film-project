const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config();
const users = require('./routes/users');

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

app.use("/users", users);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

// mongodb+srv://anhtung:<password>@cluster0.vhyeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority