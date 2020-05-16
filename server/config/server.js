const port = 3004;

const express = require("express");
const cors = require("../config/cors");
const path = require("path");
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors);
server.use(express.static(path.join(__dirname, "..", "..", "client", "build")));

server.listen(port, () => {
  console.log("[ SERVER ]", "Running on port", port);
});

module.exports = server;
