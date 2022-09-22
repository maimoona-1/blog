import { configureStore } from '@reduxjs/toolkit';

import postReducer from 'components/Post/postSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
