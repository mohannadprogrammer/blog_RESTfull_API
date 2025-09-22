const express = require('express');
const bodyParser = require('body-parser');

// import express from 'express';

const app =express();

const postRoute = require("./routes/posts")
const userRoute = require("./routes/user")
const commentRoute = require("./routes/comment")

// middleware to parse JSON request bodies  


app.use(bodyParser.json());

app.use('/posts', postRoute)
app.use('/user', userRoute)
app.use('/comment', commentRoute)

// start the server

module.exports = {app};