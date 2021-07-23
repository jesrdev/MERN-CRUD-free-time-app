import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
  },
  genre: {
    type: String,
  },
  director: {
    type: String,
  },
  cast: {
    type: [String],
  },
});
