const http = require("http");
const open = require("open");
const os = require("os");
const app = require("./app");
const config = require("./config");

const server = http.createServer(app);

// # listen to server
server.listen(config.serverPort, () => {
  console.log(`server is listening on port ${config.serverPort}`);
});

// # open captcha harvester
open(`http://captcha.${config.site.name}:8080`, {
  app: os.platform() == "win32" ? "chrome" : "google chrome",
});
