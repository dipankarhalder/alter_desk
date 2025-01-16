const express = require("express");

const { EnvConfig } = require("./config");
const { RootApiRouter } = require("./routes");
const { server } = require("./constant/msg.constant");
const { all_routers } = require("./constant/route.constant");

const app = express();
app.use(all_routers.base, RootApiRouter);

app.listen(EnvConfig.PORT, () => {
  console.log(`${server.serve_success} ${EnvConfig.PORT}`);
});
