
import React, { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Car from './Pages/Car';
import Register from './Pages/Register';
import Error from './Components/Error';
import NotFound from './Components/NotFound';
import PrivateRoute from './Components/PrivateRoute';
import AddCar from './Components/AddCar';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './Components/Layout';
import EditCar from './Components/EditCar';
import { useDispatch } from 'react-redux';
import {  getUser } from './Api/UserApi';
import { setUser } from './redux/Store/UserSlice';


function App() {
  const token = localStorage.getItem("token");

  // get user
  const dispatch = useDispatch()

  useEffect(() => {
    const getUsers = async () => {
      const data = await getUser()
      if (data) {
        dispatch(setUser(data))
      } else {
        dispatch(setUser(null))
      }
    }
    getUsers()
  }, [])


  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddCar />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <PrivateRoute>
              <EditCar />
            </PrivateRoute>
          }
        />
        <Route path='/Register' element = {<Register/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/Car' element = {<Car/>}/>
        <Route path="/error" element={<Error/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
