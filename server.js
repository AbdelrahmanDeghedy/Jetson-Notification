const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const TelegramBot = require("node-telegram-bot-api");
const registerUsers = require("./services/registerUsers");

dotenv.config({ path: "./config.env" });

const token = process.env.TOKEN;

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
  registerUsers(msg, chatId, bot);
});
