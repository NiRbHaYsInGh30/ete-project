const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose.set("strictQuery", false);

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log("[DB] Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
