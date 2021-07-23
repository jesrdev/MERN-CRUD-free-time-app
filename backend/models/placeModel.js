import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PlaceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  location: {
    type: String,
  },
});
