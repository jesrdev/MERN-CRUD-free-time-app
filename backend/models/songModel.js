import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const SongSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  band: {
    type: String,
  },
  guitarrist: {
    type: String,
  },
  level: {
    type: String,
  },
  keywords: {
    type: [String],
  },
});
