import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  level: {
    type: String,
  },
  mainIngredients: {
    type: [String],
  },
});
