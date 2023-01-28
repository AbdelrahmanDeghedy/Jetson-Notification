const express = require("express");
const reportsRoutes = require("./../controllers/reportsRoutes");

const router = express.Router();

router
  .route("/")
  .get(reportsRoutes.getAllReports)
  .post(reportsRoutes.createReports)
  .delete(reportsRoutes.deleteReport);

module.exports = router;
