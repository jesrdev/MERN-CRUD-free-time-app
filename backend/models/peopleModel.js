import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PeopleSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  role: {
    type: String,
  },
  areas: {
    type: [String],
  },
});
