const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const bot = require("./services/createBot");

const registerUsers = require("./services/registerUsers");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.set("strictQuery", false);

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

bot.newBot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  registerUsers(msg, chatId, bot.newBot);
});
