const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const userRoutes = require("./routes/user.routes");
const bmiRoutes = require("./routes/bmi.routes");

const app = express();
const PORT = process.env.PORT || 8080

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res)=>{
  res.send("Welcome server");
});

app.use("/users", userRoutes);
app.use("/bmi", bmiRoutes);

app.listen(PORT, async() => {
  await dbConnect();
  console.log("Server started at port 8080")
})