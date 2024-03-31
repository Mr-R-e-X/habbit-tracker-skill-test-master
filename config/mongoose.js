const mongoose = require("mongoose");
const env = require("dotenv").config();
// local db settingss
// console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "DB Error"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
