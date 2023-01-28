const UserModel = require("../models/user.model");


const userRegister = async(req, res) =>{
  const  {name, email, password} = req.body;
  try{
    const findUser= await UserModel.findOne({email});

    if(findUser){
      return res.status(404).send({message: "User already exist"});
    }

    const newUser = await UserModel.create({name, email, password});
    return res.status(200).send({message: "Register successfully"});

  }catch(err){
    return res.status(500).send(err.message);
  }

}

const userLogin = async(req, res) =>{
  const {email, password} = req.body;
  try{
    const findUser= await UserModel.findOne({email});

    if(!findUser){
      return res.status(404).send({message: "User does not exist"});
    }

    const checkPassword= await (password, findUser.password);

    if(!checkPassword){
      return res.status(400).send({message: "Invalid Credentials"})
    }

    return res.status(200).send({message: "Login Successful"});

  }catch(err){
    return res.status(500).send(err.message);
  }

}


const userProfileDetails = async(req, res) =>{
  const {id: _id} = req;
  try{
    const findUser= await UserModel.findOne({email});

    if(!findUser){
      return res.status(404).send({message: "User does not exist"});
    }

    const checkPassword= await (password, findUser.password);

    if(!checkPassword){
      return res.status(400).send({message: "Invalid Credentials"})
    }

    return res.status(200).send({message: "Login Successful"});

  }catch(err){
    return res.status(500).send(err.message);
  }
}

module.exports = {userLogin, userRegister}