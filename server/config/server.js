const port = 3003;

const express = require("express");
const server = express();

server.use(express.json());

server.listen(port, () => {
  console.log("[ SERVER ]", "Running on port", port);
});
