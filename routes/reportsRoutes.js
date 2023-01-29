const express = require("express");
const reportsRoutes = require("./../controllers/reportsController");

const router = express.Router();

router.route("/").post(reportsRoutes.createReports);

// router.route("/:id").delete(reportsRoutes.deleteReport);

module.exports = router;
