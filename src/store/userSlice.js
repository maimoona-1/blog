import { createSlice } from '@reduxjs/toolkit';

const defaultUser = {
  id: 1,
  avatarUrl: 'https://material-ui.com/static/images/avatar/6.jpg',
  name: 'John Doe',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: defaultUser,
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {  } = userSlice.actions;

export default userSlice.reducer;
