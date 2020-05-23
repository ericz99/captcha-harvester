const { execSync } = require("child_process");
const readLine = require("readline");
const fs = require("fs");

const MAIN_DIR = "C:/Windows/System32/drivers/etc/hosts";
const SITES = [
  "captcha.supremenewyork.com",
  "captcha.kith.com",
  "captcha.undefeated.com",
  "captcha.bdgastore.com",
];

function updateHost() {
  const data = fs.readFileSync(MAIN_DIR, "utf8");
  const splitData = data.split("\n");

  for (let i = 0; i < SITES.length; i++) {
    if (!data.includes(SITES[i])) {
      if (typeof splitData[splitData.length - 1] == "string") {
        splitData.push(`127.0.0.1 ${SITES[i]}`);
      }
    }
  }

  const newData = splitData.join("\n");
  fs.writeFileSync(MAIN_DIR, newData, "utf8");
  console.log("updated!");
}

// # update host file
updateHost();
