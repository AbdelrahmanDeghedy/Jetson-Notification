const NotificationUsers = require("../models/notificationUsersModel");

const registerUsers = async (msg, chatId, bot) => {
  if (msg.text.toLowerCase() == "add me") {
    try {
      await NotificationUsers.create({
        userId: chatId,
        username: msg.chat?.first_name + msg.chat?.last_name,
      });
      bot.sendMessage(chatId, "you're now added to the notification list!");
    } catch (e) {
      bot.sendMessage(chatId, "You're already added!");
    }
  } else if (msg.text.toLowerCase() == "remove me") {
    try {
      await NotificationUsers.findOneAndRemove({ userId: chatId });
      bot.sendMessage(chatId, "you're now removed to the notification list!");
    } catch (e) {
      bot.sendMessage(chatId, "You're not registered!");
    }
  } else {
    bot.sendMessage(
      chatId,
      "Please send 'add me' to be added to the notification list, or 'remove me' to be removed from it"
    );
  }
};

module.exports = registerUsers;
