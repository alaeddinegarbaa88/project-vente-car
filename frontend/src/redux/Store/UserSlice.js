import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "User",
  initialState:[{
    id: "none",
      name: "none",
      email: "none",
      role:"none"
  }],
  reducers: {
    setUser:(state,actions)=>{
        return actions.payload
    }

  },
});

// Action creators are generated for each case reducer function
export const {setUser} = UserSlice.actions;

export default UserSlice.reducer;
