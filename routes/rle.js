var express = require("express");
var router = express.Router();

/* GET home page. */
function rle(original) {
  const charList = original.split("");

  let lastLetter = "";
  let letterCount = 0;
  let result = "";

  charList.forEach(c => {
    if (c === lastLetter) {
      letterCount++;
    } else {
      result += letterCount ? `${lastLetter}${letterCount}` : "";
      lastLetter = c;
      letterCount = 1;
    }
  });

  result += letterCount ? `${lastLetter}${letterCount}` : "";

  return result;
}

router.get("/:theWord", function(req, res, next) {
  const original = req.params.theWord;
  result = rle(original);

  res.json({ original, result });
});

module.exports = router;
