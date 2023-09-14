import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    name: null,
    age: null,
    timeSlot: null,
  },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload;
    },
    setUserAge: (state, action) => {
      state.age = action.payload;
    },
    setDateTimeSlot: (state, action) => {
      state.timeSlot = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserName, setUserAge, setDateTimeSlot } = userSlice.actions;

export default userSlice.reducer;
