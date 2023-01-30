const TelegramBot = require("node-telegram-bot-api");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const token = process.env.TOKEN;

const bot = (function () {
  this.newBot = new TelegramBot(token, { polling: true });
  return this;
})();

module.exports = bot;
