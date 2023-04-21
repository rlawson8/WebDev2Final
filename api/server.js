var express = require("express");
var mongoose = require("mongoose");
var Review = require("./models/review");
var bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());

const mongoURI =
  "mongodb+srv://team8:team8password@webdev2final.rnnizt5.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "webDev2Final",
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connected to MongoDB.");
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/**
 * Adds a single review
 * Request:
 * {
 *    title: string,
 *    description: string,
 *    stars: number,
 *    user: string
 * }
 */
app.post("/addReview", async (req, res) => {
  try {
    let review = new Review(req.body);
    review = await review.save();
    return res.status(200).json({
      status: 200,
      data: "Review added!",
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

/**
 * Gets all reviews
 */
app.get("/reviews", async (req, res) => {
  try {
    let reviews = await Review.find();
    return res.status(200).json({
      status: 200,
      data: reviews,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});
