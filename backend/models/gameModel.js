import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const GameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
  },
  genre: {
    type: String,
  },
  keywords: {
    type: [String],
  },
});
