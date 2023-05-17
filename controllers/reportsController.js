const NotificationUsers = require("./../models/notificationUsersModel");
const bot = require("../services/createBot");

exports.createReports = async (req, res) => {
  const notifiedUsers = await NotificationUsers.find({});
  let message = req.body;

  console.log(message);
  notifiedUsers.forEach((user) => {
    bot.newBot.sendMessage(user.userId, message.msg);
  });

  res.status(201).json({
    status: "success",
    data: {
      notifiedUsers,
    },
  });
};
