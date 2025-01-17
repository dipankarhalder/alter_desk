const { StatusCodes } = require("http-status-codes");

const { health_check } = require("../constant/msg.constant");

const getHealthCheck = async (req, res) => {
  try {
    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      msg: health_check.success_msg,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      msg: health_check.error_msg,
      error: error.message,
    });
  }
};

module.exports = {
  getHealthCheck,
};
