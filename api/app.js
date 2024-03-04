const app = require("./server");

const host = process.env.API_URL;
const port = process.env.API_PORT;

app.get("/", (request, response) => {
  response.send("<h1>Hello world</h1>");
});
app.get("/about", (request, response) => {
  response.send("<h1>О сайте</h1>");
});
app.get("/contact", (request, response) => {
  response.send("<h1>Контакты</h1>");
});

app.listen(port, () => {
  console.log(`Server is running at ${host}:${port}`);
});
