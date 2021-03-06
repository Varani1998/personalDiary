const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, require: true },
    city: { type: String, require: true },
    gender: { type: String, require: true },
    dateofbirth: { type: Date, require: true },
    password: {type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
