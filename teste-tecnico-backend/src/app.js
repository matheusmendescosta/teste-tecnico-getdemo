const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./model");
const { router } = require("./route");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.set("sequelize", sequelize);
app.set("models", sequelize.models);

app.get("/demos", router);

app.get("/demos/:demoId/frames", router);

app.put("/frame/:frameId", router);

module.exports = app;
