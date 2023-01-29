const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const NotificationUsers = require("./models/notificationUsersModel");
const TelegramBot = require("node-telegram-bot-api");
const token = "5920350839:AAHiZtW2ujSAyzsPsyjvR-uWN7jnkvX-ZkE";

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((e) => {
    console.log("Error: ", e);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  if (msg.text.toLowerCase() == "add me") {
    await NotificationUsers.create({
      userId: chatId,
      username: msg.chat?.first_name + msg.chat?.last_name,
    });
    bot.sendMessage(chatId, "you're now added to the notification list!");
  } else if (msg.text.toLowerCase() == "remove me") {
    bot.sendMessage(chatId, "you're now removed to the notification list!");
  } else {
    bot.sendMessage(
      chatId,
      "Please send 'add me' to be added to the notification list, or 'remove me' to be removed from it"
    );
  }
});
