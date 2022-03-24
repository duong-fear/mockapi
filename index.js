import express from "express";
import payload from "./payload.js";

var app = express();

app.use(express.json());
app.use(express.static('public'));

app.get("/", function (req, res) {
    res.send(payload[req.path]);
});

app.get("/", function (req, res) {
    res.send(payload[req.path]);
});

app.listen(8080);
