var express = require("express");
var router = express.Router();

/* GET home page. */
function l33t(original) {
  const l33tMap = [
    { char: "a", mapTo: "4" },
    { char: "e", mapTo: "3" },
    { char: "i", mapTo: "1" },
    { char: "o", mapTo: "0" },
    { char: "s", mapTo: "5" },
    { char: "t", mapTo: "7" }
  ];

  const charList = original.split("");
  let result = "";

  charList.forEach(c => {
    const l33tChar = l33tMap
      .filter(f => c.toLowerCase() === f.char)
      .map(r => r.mapTo)
      .reduce((out, ch) => (out = ch), c);
    result += l33tChar;
  });

  return result;
}

router.get("/:theWord", function(req, res, next) {
  const original = req.params.theWord;
  const result = l33t(original);

  res.json({ original, result });
});

module.exports = router;
