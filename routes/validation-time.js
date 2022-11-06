var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  function changeTimeZone(date, timeZone) {
    if (typeof date === "string") {
      return new Date(
        new Date(date).toLocaleString("en-US", {
          timeZone,
        })
      );
    }

    return new Date(
      date.toLocaleString("en-US", {
        timeZone,
      })
    );
  }
  const indoDate = changeTimeZone(new Date(), "Asia/Jakarta");

  const dArr = Date().toString().split(" ");

  const startDate = new Date(
    dArr[2] + " " + dArr[1] + " " + dArr[3] + " 06:00:00"
  );
  const endDate = new Date(
    dArr[2] + " " + dArr[1] + " " + dArr[3] + " 22:00:00"
  );

  if (startDate <= indoDate && indoDate <= endDate) {
    res.send({ message: "valid" });
  } else res.send({ message: "not valid" });
});

module.exports = router;
