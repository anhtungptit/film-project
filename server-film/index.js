const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

const userRoutes = require('./routes/users');
const movieRoutes = require('./routes/movies');
const adminRoutes = require('./routes/admins');

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

app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/admin', adminRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})