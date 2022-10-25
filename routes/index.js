var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.type("html");
  res.end(`
    <html>
    <head>
    </head>
    <body>
      <center>
      <h1>Captcha Decoder</h1>
      <img src="http://127.0.0.1:3004/captcha" style="border: 1px solid black;"/>
      </center>
    </body>
    </html>
    `);
});

module.exports = router;
