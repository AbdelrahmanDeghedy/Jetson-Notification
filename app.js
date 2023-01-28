const express = require("express");

const reportsRoutes = require("./routes/reportsRoutes");

const app = express();

app.use(express.json());

// 2) ROUTES
app.use("/api/reports", reportsRoutes);

module.exports = app;
