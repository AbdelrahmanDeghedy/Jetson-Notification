const NotificationUsers = require("./../models/notificationUsersModel");
const bot = require("../services/createBot");

exports.getRegisteredUsers = async (req, res) => {
  const notifiedUsers = await NotificationUsers.find({});

  res.status(201).json({
    status: "success",
    data: {
      notifiedUsers,
    },
  });
};
