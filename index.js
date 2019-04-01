const express = require("express");
const app = express();

require("./router")(app);

app.listen(3000, () => {
  "listening PORT 3000";
});
