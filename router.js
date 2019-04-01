const options = require("./Options");

module.exports = function(app) {
  app.use("/api/options", options);
};
