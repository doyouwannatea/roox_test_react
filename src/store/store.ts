import { configureStore } from '@reduxjs/toolkit';
import { jsonPlaceholderApi } from 'api/jsonPlaceholderApi';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import userSlice from './reducers/user/userSlice';

export const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> =
  useSelector;
