const express = require("express");
const { urlencoded } = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = require("./router/index");
app.use(cors({origin:"*",}));
mongoose.set("strictQuery",false)
mongoose.connect('mongodb://localhost:27017/user');
app.use(express.json());
app.use(urlencoded({extended:true,}));
app.use("/api", router);
router.use("/userReview",express.static('userReview'))
app.listen(8008, () => {
  console.log(`server is running on ${8008}`);
});
