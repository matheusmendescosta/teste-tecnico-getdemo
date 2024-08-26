const { Demo, Frame } = require("./model");

async function getDemos() {
  try {
    return await Demo.findAll();
  } catch (error) {
    throw error;
  }
}

async function getFramesByDemoId(demoId) {
  try {
    return await Frame.findAll({
      where: { demoId },
      include: ["demo"],
    });
  } catch (error) {
    throw error;
  }
}

async function updateFrame(frame) {
  try {
    await Frame.update(
      { html: frame.html },
      {
        where: {
          id: frame.id,
        },
      }
    );
    return await Frame.findByPk(frame.id);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getDemos,
  getFramesByDemoId,
  updateFrame,
};
