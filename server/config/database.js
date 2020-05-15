const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

try {
  function connectDatabase() {
    return mongoose.connect("mongodb://localhost/todo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  connectDatabase().then((connection) => {
    console.log("[ DATABASE ]", "Connected with MongoDB");
    module.exports = connection;
  });
} catch (error) {
  console.log(error);
}
