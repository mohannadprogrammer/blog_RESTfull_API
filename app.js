const express = require('express');
// import express from 'express';

const app =express();

const postRoute = require("./routes/posts")

app.use('/posts', postRoute)

module.exports = {app};