const port = 3003;

const express = require("express");
const cors = require("../config/cors");
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors);

server.listen(port, () => {
  console.log("[ SERVER ]", "Running on port", port);
});

module.exports = server;
