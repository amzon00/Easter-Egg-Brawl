require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./db/connect");
const eggsRouter = require("./routes/eggs");

let port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/v1", eggsRouter);
app.use(bodyParser.urlencoded({ extended: false }));

const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Port is listening of ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
