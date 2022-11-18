//Importes libreries
const express = require("express");
const { createUser, login } = require("../controllers/user");
const {validation,RegisterValidator,LoginValidator} = require ('../middelware/RegisterValidator')
const { isAuth } = require("../middelware/isAuth");


//Define Route
const userRouter = express.Router();

//Add new user register
userRouter.post("/register", RegisterValidator,validation,createUser);

//Login 
userRouter.post("/login",LoginValidator,login);

//get a user
userRouter.get('/getaUser/:id',isAuth,(req,res)=>{
    res.send(req.user)
})


module.exports = userRouter
