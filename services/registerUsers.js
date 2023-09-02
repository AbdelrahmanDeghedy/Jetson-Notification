const NotificationUsers = require("../models/notificationUsersModel");

const registerUsers = async (msg, chatId, bot) => {
  if (msg?.text?.toLowerCase() == "add me") {
    try {
      await NotificationUsers.create({
        userId: chatId,
        username:
          msg.chat?.first_name +
          " " +
          (msg.chat?.last_name === undefined ? "" : msg.chat?.last_name),
      });
      bot.sendMessage(chatId, "You're now added to the notification list!");
    } catch (e) {
      bot.sendMessage(chatId, "You're already added!");
    }
  } else if (msg?.text?.toLowerCase() == "remove me") {
    try {
      await NotificationUsers.findOneAndRemove({ userId: chatId });
      bot.sendMessage(chatId, "You're now removed from the notification list!");
    } catch (e) {
      bot.sendMessage(chatId, "You're not registered!");
    }
  } else if (msg?.text?.toLowerCase() == "users") {
    try {
      const notifiedUsers = await NotificationUsers.find({});
      let registeredUsernames = "Registered Users are: \n";

      notifiedUsers.forEach((user, idx) => {
        registeredUsernames += idx + 1 + ". " + user.username;
        registeredUsernames += "\n";
      });

      bot.sendMessage(chatId, registeredUsernames);
    } catch (e) {
      bot.sendMessage(chatId, "An error occurred :(" + e);
    }
  } else {
    bot.sendMessage(
      chatId,
      "Please send: \n1. 'add me' to be added to the notification list \n2. 'remove me' to be removed from it \n3. 'users' to view the registered users."
    );
  }
};

module.exports = registerUsers;
