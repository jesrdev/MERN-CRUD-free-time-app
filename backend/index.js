import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "./routes/appRoutes";
import path from "path";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

//static files front
app.use(express.static(path.join(__dirname, "/build")));

//mongo connection
const DB =
  "mongodb+srv://user:user1234@cluster0.nrb8y.mongodb.net/courses?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//CORS setup
app.use(cors());

routes(app);

app.get("/", (req, res) => {
  res.send(`Application is running on port ${PORT}`);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(_dirname + "/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
