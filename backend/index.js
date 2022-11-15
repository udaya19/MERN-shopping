const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mern_fooddelivery");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error in connecting database"));
db.once("open", () => console.log("Connected to database"));
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
