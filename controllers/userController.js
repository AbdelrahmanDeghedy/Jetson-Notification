const NotificationUsers = require("./../models/notificationUsersModel");
const bot = require("../services/createBot");

exports.getRegisteredUsers = async (req, res) => {
  const notifiedUsers = await NotificationUsers.find({});
  let registeredUsernames = "";

  notifiedUsers.forEach((user) => {
    registeredUsernames += user.username;
    registeredUsernames += ", ";
  });

  bot.newBot.sendMessage("Registered Users are:");
  bot.newBot.sendMessage(registeredUsernames);

  res.status(201).json({
    status: "success",
    data: {
      registeredUsernames,
    },
  });
};
