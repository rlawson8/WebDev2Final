const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let reviewSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // This adds a "createdAt" and "updatedAt" attribute to the Review model.
);

let Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;
