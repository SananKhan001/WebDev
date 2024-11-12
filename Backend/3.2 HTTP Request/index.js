import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello, World !!<h1>");
});

app.get("/sanan", (req, res) => {
    res.sendStatus(500);
});

app.listen(port, () => {
    console.log(`Server running on port ${3000}.`);
});