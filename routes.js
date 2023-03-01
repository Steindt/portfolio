const express = require("express");
const router = express.Router();
const path = require("path").resolve("./");

router.get("/about", (req, res) => {
    res.sendFile(path + "/html/about.html");
});

router.get("/projects", (req, res) => {
    res.sendFile(path + "/html/projects.html");
});

router.get("/projects/:project", (req, res) => {
    res.sendFile(path + "/html/projects/" + req.params.project + ".html");
});

router.get("/", (req, res) => {
    res.sendFile(path + "/html/home.html");
})

module.exports = {
    router
}