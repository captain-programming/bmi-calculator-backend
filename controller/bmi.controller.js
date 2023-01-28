const { default: mongoose } = require("mongoose");
const BmiModel = require("../models/bmi.models");

const bmiCalculations = async(req, res) =>{
  const {height, weight, userId} = req.body;

  let convertHight = height * 0.3048;
  // console.log(height)

  let result = Number(weight/(convertHight * convertHight)).toFixed(2); 
  // console.log(height * height)

  try{
    if(!mongoose.Types.ObjectId.isValid(userId)){
      return res.status(404).send('users unavailable...');
    }
    await BmiModel.create({userId, height, weight, result});
    return res.status(200).json(result);

  }catch(err){
    return res.status(500).send(err.message);
  }
}

const bmiHistory = async(req, res) =>{
  const {userId} = req.body;

  try{
    if(!mongoose.Types.ObjectId.isValid(userId)){
      return res.status(404).send('users unavailable...');
    }
    let history = await BmiModel.find({userId});
    return res.status(200).json(history);

  }catch(err){
    return res.status(500).send(err.message);
  }
}

module.exports = {bmiCalculations, bmiHistory};