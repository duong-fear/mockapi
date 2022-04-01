import express from "express";
import payload from "./payload.js";

var app = express();

app.use(express.json());
app.use(express.static('public'));

app.get("/api", function (req, res) {
    res.send(payload[req.path]);
});

app.get("/api/game/2DPM", function (req, res) {
    res.send(payload[req.path]);
});

app.get("/api/init", function (req, res) {
    res.send(payload[req.path]);
});

app.get("/api/hub_data", function (req, res) {
    res.send(payload[req.path]);
});

app.get("/api/me", function (req, res) {
    res.send(payload[req.path]);
});

app.listen(8080);
