var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  let captcha = req.query.captcha;
  console.log(captcha, req.session);
  if (req.session.captcha === captcha) {
    res.send({ message: "verified" });
  } else {
    res.send({ message: "not verified" });
  }
});

module.exports = router;
