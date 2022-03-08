const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  pet: {
    type: String,
    default: "basic",
  },
  membership: {
    type: String,
    default: "basic",
  },
  scoreHistoryWpm: [Number],
  scoreHistoryAccuracy: [Number],
  scoreHistoryPerCharacter: [
    {
      letter: String,
      missed: Number,
    },
  ],
  snippetsJavaScript: [Schema.Types.ObjectId],
  snippetsPhyton: [Schema.Types.ObjectId],
  snippetsTyeScript: [Schema.Types.ObjectId],
  snippetsCsharp: [Schema.Types.ObjectId],
});

const User = model("User", UserSchema, "Users");

module.exports = User;
