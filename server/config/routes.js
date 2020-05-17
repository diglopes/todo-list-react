const express = require("express");
const path = require("path");

module.exports = function (server) {
  const router = express.Router();
  server.use("/api", router);
  const todoService = require("../api/todo/todo-service");
  todoService.register(router, "/todo");

  server.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "..", "..", "client", "build", "index.html")
    );
  });
};
