//server.js
const express = require('express');
const app = express();

app.use("/", (req, res) => {
    res.send({message: process.env.HELLO});
    res.end();

});

module.exports = app;
