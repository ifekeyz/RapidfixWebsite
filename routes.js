var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {

res.render("index");
});

router.get("/wallet", function(req, res) {

   res.render("wallet");
   });

module.exports = router;