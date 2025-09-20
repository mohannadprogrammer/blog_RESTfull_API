const express = require('express');
const bodyParser = require('body-parser');

// import express from 'express';

const app =express();

const postRoute = require("./routes/posts")
const userRoute = require("./routes/user")

// middleware to parse JSON request bodies  


app.use(bodyParser.json());

app.use('/posts', postRoute)
app.use('/user', userRoute)

module.exports = {app};