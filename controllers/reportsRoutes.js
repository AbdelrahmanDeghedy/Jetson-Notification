exports.getAllReports = (req, res) => {
  console.log("test");
  const reports = [1, 2, 3];

  res.status(200).json({
    status: "success",
    data: {
      reports,
    },
  });
};

exports.createReports = (req, res) => {
  console.log(req.body);

  res.status(200).json({
    status: "success",
    data: {
      reports: req.body,
    },
  });
};

exports.deleteReport = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
