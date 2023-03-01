const express = require('express');
const app = express();
const port = require("./config").port;

const server = app.listen(port, () => {
    console.log("Listening on " + port);
})

app.use(express.static(__dirname + "/public"));

const routes = require("./routes.js").router;
app.use(routes);

app.use((request, response) => {
    response.status(404).sendFile(__dirname + "/html/error.html");
})