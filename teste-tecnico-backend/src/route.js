const express = require("express");
const demosController = require("./controller");

const router = express.Router();

router.get("/demos", demosController.getDemos);

router.get("/demos/:demoId/frames", demosController.getAllFramesByDemoId);

router.put("/frame/:frameId", demosController.updateFrame);

module.exports = {
  router,
};
