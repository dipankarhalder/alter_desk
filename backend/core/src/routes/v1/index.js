const express = require("express");
const router = express.Router();

const { all_routers } = require("../../constant/route.constant");
const { getHealthCheck } = require("../../controllers");

router.get(all_routers.route_health_check, getHealthCheck);

module.exports = {
  v1Routes: router,
};
