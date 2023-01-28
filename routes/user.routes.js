const express = require("express");
const { userLogin, userRegister, userProfileDetails } = require("../controller/users.controller");

const userRoutes = express();

userRoutes.post("/login", userLogin);
userRoutes.post("/register", userRegister);
userRoutes.get("/user-profile/:id", userProfileDetails);

module.exports = userRoutes;