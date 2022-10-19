const express = require("express");
const router = express.Router();
const { getAllEggs } = require("../controllers/eggs");

router.route("/eggs").get(getAllEggs);

module.exports = router;
