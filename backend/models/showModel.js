import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ShowSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  creator: {
    type: String,
  },
});
