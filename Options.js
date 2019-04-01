const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send([30, 50, 20, 10, 1]);
});

module.exports = router;
