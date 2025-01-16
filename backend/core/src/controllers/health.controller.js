const { health_check } = require("../constant/msg.constant");

const getHealthCheck = async (req, res) => {
  try {
    return res.status(200).json({
      status: 200,
      msg: health_check.success_msg,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: health_check.error_msg,
      error: error.message,
    });
  }
};

module.exports = {
  getHealthCheck,
};
