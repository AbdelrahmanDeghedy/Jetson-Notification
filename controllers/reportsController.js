const NotificationUsers = require("./../models/notificationUsersModel");
const TelegramBot = require("node-telegram-bot-api");
const token = "5920350839:AAHiZtW2ujSAyzsPsyjvR-uWN7jnkvX-ZkE";

exports.createReports = async (req, res) => {
  const notifiedUsers = await NotificationUsers.find({});
  const bot = new TelegramBot(token);

  notifiedUsers.forEach((user) => {
    console.log(user.userId, req.body);
    bot.sendMessage(
      user.userId,
      JSON.stringify(req.body) ?? "Please enter a valid report"
    );
  });

  res.status(201).json({
    status: "success",
    data: {
      notifiedUsers,
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
