const net = require("net");
const client = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    }
  });

  return stdin;
};

setupInput();

// console.log("Connecting ...");
// client.clientConnect()
