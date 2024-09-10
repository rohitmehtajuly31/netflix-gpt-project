// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    email: null,
    name: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    removeUser: (state) => {
      state.uid = null;
      state.email = null;
      state.name = null;
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
