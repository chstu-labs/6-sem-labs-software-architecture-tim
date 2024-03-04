const express = require("express");
const app = express();

const API_URL = process.env.API_URL;

app.use((request, response, next) => {
  fetch(API_URL + request.url)
    .then((response) => response.text())
    .then((text) => {
      response.send(text);
    });
});

app.listen(3001);
