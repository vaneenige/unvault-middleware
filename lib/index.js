const unvault = require("unvault");

const routes = unvault();

module.exports = config => {
  for (let i = 0; i < config.length; i += 1) {
    const { path, interval, update } = config[i];
    routes.insert(path, interval, update);
  }
  return function(req, res, next) {
    const route = routes.get(req.originalUrl);
    if (route !== undefined) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(route.value);
    } else {
      next();
    }
  };
};
