var express = require("express");
var router = express.Router();

var svgCaptcha = require("svg-captcha");

router.get("/", function (req, res, next) {
  var captcha = svgCaptcha.create({
    size: 5,
    width: "500",
    ignoreChars: "iLl10I",
  });
  req.session.captcha = captcha.text;
  console.log(req.session.captcha);
  res.type("svg");
  res.status(200).send(captcha.data);
});

module.exports = router;
