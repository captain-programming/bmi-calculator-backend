const express = require("express");
const { bmiCalculations, bmiHistory } = require("../controller/bmi.controller");

const bmiRoutes = express();

bmiRoutes.post("/bmi-calculation", bmiCalculations);
bmiRoutes.post("/history", bmiHistory);

module.exports = bmiRoutes;