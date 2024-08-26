const demoRepository = require("./repository");

async function getDemos() {
  return await demoRepository.getDemos();
}

async function getAllFramesByDemoId(demoId) {
  return await demoRepository.getFramesByDemoId(demoId);
}

async function updateFrame(frameId) {
  return await demoRepository.updateFrame(frameId);
}

module.exports = {
  getDemos,
  getAllFramesByDemoId,
  updateFrame,
};
