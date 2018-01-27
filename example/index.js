const polka = require("polka");
const middleware = require("./../lib");

const route = {
  path: "/random",
  headers: { "Content-Type": "application/json" },
  interval: 1000,
  update: () => {
    return JSON.stringify({
      random: Math.random()
    });
  }
};

polka()
  .use(middleware([route]))
  .listen(3000);
