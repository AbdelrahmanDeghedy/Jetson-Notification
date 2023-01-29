const NotificationUsers = require("./../models/notificationUsersModel");
const TelegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const token = process.env.TOKEN;

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
