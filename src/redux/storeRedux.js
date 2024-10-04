import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';

export const storeRedux = configureStore({
  reducer: {
    auth: authReducer,
  },
});
