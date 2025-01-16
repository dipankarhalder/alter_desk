const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { EnvConfig } = require("./config");
const { RootApiRouter } = require("./routes");
const { server } = require("./constant/msg.constant");
const { all_routers } = require("./constant/route.constant");

/* initialize express */
const app = express();

/* initialize middlewares */
app.use(morgan("dev"));
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* handle routes */
app.use(all_routers.base, RootApiRouter);

/* server connected successfully */
app.listen(EnvConfig.PORT, () => {
  console.log(`${server.serve_success} ${EnvConfig.PORT}`);
});
