const { Schema, model } = require("mongoose");

const BmiSchema = new Schema({
  userId: {type: String},
  height: {type: Number},
  weight: {type: Number},
  result: {type: Number},
})

const BmiModel = model("bmiValues", BmiSchema);

module.exports = BmiModel;