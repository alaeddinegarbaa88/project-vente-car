import axios from "axios";

export const createUser= async (newUser)=>{
    const user =  await axios.post("http://localhost:5000/auth/user/register",newUser);
    return user
 
 }
 
 export const UserLogin= async (log)=>{
    const logged =  await axios.post("http://localhost:5000/auth/user/login",log);
    return logged
 
 }