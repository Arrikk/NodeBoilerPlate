const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("../config/db");

const path = require("path");
const errorHandler = require("./errorhandler");
// const errorHandler = require("./errorhandler");

class App {
  constructor(options = { port: 0 }) {
    this._port = options.port;
  }

  runApp = async (routes = []) => {
    await connectDB();
    app.use(express.json({ extended: true }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors({ origin: "*" }))

    app.use('/public', express.static(path.join(__dirname, 'public')));

    // app.use(errorHandler)
    routes.map((route) => {
      route.object.map((e) => {
        app.use(
          route.path,
          async function (err, req, res, next) {
            console.error(err);
            console.error(err.stack);
            res.status(500).send("Something went wrong on the server.");
          },
          e
        );
      });
    });
    app.use((req, res, next) => {
      res.status(404).json({ message: "Sorry, that route doesn't exist." });
    });
    app.listen(this._port, () =>
      console.log("Listening on port " + this._port)
    );
  };

  getApp = () => {
    return app;
  };
}

module.exports = App;
