const express = require("express");

const router = express.Router();

router.get("/user", (req, res) => {
  res.json({
    data: "hey how are you this is user api",
  });
});

module.exports = router;
