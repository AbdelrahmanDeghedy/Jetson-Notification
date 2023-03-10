const mongoose = require("mongoose");

const notificationUsersSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
  },
});

const NotificationUser = mongoose.model(
  "NotificationUser",
  notificationUsersSchema
);

module.exports = NotificationUser;
