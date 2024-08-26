const serviceDemo = require("./service");

async function getDemos(req, res, next) {
  try {
    res.send(await serviceDemo.getDemos());
  } catch (error) {
    next(error);
  }
}

async function getAllFramesByDemoId(req, res, next) {
  try {
    const { demoId } = req.params;
    res.send(await serviceDemo.getAllFramesByDemoId(demoId));
  } catch (error) {
    next(error);
  }
}

async function updateFrame(req, res, next) {
  try {
    const { frameId } = req.params;
    let frame = req.body;
    frame.id = frameId;
    frame = await serviceDemo.updateFrame(frame);
    res.send(frame);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getDemos,
  getAllFramesByDemoId,
  updateFrame,
};
