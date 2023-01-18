const express = require("express");

const mongoose = require("mongoose");

mongoose.set('strictQuery', true);


const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const { dburl, port } = require("./apis/config/config");

const router = require("./apis/router/routes");

app.use(express.json());

app.use("/api", router);

mongoose.connect(dburl);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
