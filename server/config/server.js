const port = 3003;

const express = require("express");
const server = express();

server.use(express.urlencoded({ extended: true }));

server.listen(port, () => {
  console.log("[ SERVER ]", "Running on port", port);
});

module.exports = server;
