const express = require("express");
const reportsController = require("./../controllers/reportsController");

const router = express.Router();

router.route("/").post(reportsController.createReports);

module.exports = router;
