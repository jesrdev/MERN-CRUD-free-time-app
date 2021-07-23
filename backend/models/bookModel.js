import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  type: {
    type: String,
  },
});
