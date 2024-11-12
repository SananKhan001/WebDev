import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Name: ${req.body.street}</h1><h1>Last Name: ${req.body.pet}</h1>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
