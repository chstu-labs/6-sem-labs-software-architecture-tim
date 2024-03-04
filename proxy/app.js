const app = require("./server");
const axios = require("axios");

const host = process.env.API_URL;
const apiPort = process.env.API_PORT;
const port = process.env.PROXY_PORT;

const proxyURL = `${host}:${apiPort}`;

app.use((request, response) => {
  axios
    .get(proxyURL + request.url)
    .then((res) => {
      response.send(res.data);
    })
    .catch((err) => {
      response.status(500).send("Something went wrong!");
    });
});

app.listen(port, () => {
  console.log(`Server is running at ${host}:${port}`);
});
