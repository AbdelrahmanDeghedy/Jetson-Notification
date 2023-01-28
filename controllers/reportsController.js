const Report = require("./../models/reportModel");

exports.getAllReports = async (req, res) => {
  const reports = await Report.find({});

  res.status(200).json({
    status: "success",
    data: {
      reports,
    },
  });
};

exports.createReports = async (req, res) => {
  const newReport = await Report.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      report: newReport,
    },
  });
};

exports.deleteReport = async (req, res) => {
  await Report.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
};
