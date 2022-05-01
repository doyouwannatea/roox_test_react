import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jsonPlaceholderApi } from 'api/jsonPlaceholderApi';
import { User, FieldsToSortUsersBy } from 'models/User';

export interface State {
  loading: boolean;
  error: string;
  usersList?: User[];
  sortBy?: FieldsToSortUsersBy;
  selectedUser?: User;
}

const initialState: State = {
  loading: false,
  error: '',
  usersList: undefined,
  sortBy: undefined,
  selectedUser: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.usersList = action.payload;
    },
    setSortBy: (
      state,
      action: PayloadAction<FieldsToSortUsersBy>
    ) => {
      state.sortBy = action.payload;
    },
    selectUser: (state, action: PayloadAction<User>) => {
      // state.selectedUser = action.payload;
      return { ...state, selectedUser: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        jsonPlaceholderApi.endpoints.getUsers.matchFulfilled,
        (state, { payload }) => {
          state.usersList = payload;
          state.loading = false;
        }
      )
      .addMatcher(
        jsonPlaceholderApi.endpoints.getUsers.matchPending,
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        jsonPlaceholderApi.endpoints.getUsers.matchRejected,
        (state, { error }) => {
          state.loading = false;
          state.error = JSON.stringify(error);
        }
      );
  },
});

export const { setUsers, setSortBy, selectUser } = userSlice.actions;
export default userSlice.reducer;
