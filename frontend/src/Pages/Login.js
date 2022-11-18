import React from 'react'
import { UserLogin } from '../Api/UserApi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
const navigate = useNavigate()
const [email,setEmail]=useState("")
const [password, setPassword] = useState("")


  const handlelogin = async () => {   
    var res = await UserLogin({ email, password })
    // Show toast after getting the result
    toast.promise(UserLogin({ email, password }), {
      loading: "Connecting...",
      success: <b>LogedIn !</b>,
      error: <b>Check your information .</b>,
    });
    // Getting the token and save it in the localStorage under the name of token as a key
    const token =  res.data.token;
    localStorage.setItem("token",token)
    navigate("/");
  }
  return (
    <div>

<Toaster position="top-right"/>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      
      <Button  variant="primary" onClick={()=>handlelogin()}>
        Connexion
      </Button>
      <div className='form-group'>
            <p> Don't have an account? <a href="/Register" className='form-link'>Here for Register</a></p>
          </div>
    </Form>

    </div>
  )
}

export default Login;