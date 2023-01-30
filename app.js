const express = require("express");

const reportsRoutes = require("./routes/reportsRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/api/reports", reportsRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
