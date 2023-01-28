const express = require("express");
const { userLogin, userRegister } = require("../controller/users.controller");

const userRoutes = express();

userRoutes.post("/login", userLogin);
userRoutes.post("/register", userRegister);

module.exports = userRoutes;