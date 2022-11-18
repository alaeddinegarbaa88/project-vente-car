import { configureStore } from '@reduxjs/toolkit'

import  CarSlice  from './CarSlice'
import  userSlice  from './UserSlice'

export default configureStore({
  reducer:{
   
    Car: CarSlice,
    User:userSlice
  }
})