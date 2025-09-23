const express = require('express');
const bodyParser = require('body-parser');

// import express from 'express';

const app =express();

const postRoute = require("./routes/posts")
const userRoute = require("./routes/user")
const commentRoute = require("./routes/comment")
const catogryRoute = require("./routes/catogry")

// middleware to parse JSON request bodies  
const auth = require("./middleware/auth")

app.use(bodyParser.json());

app.use('/posts', auth ,postRoute)
app.use('/user',userRoute)
app.use('/comment',auth, commentRoute)
app.use('/catogry', catogryRoute)
// start the server

module.exports = {app};