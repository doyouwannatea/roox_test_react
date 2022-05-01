import { RootState } from 'store/store';

export const userLoading = (state: RootState) => state.user.loading;
export const usersList = (state: RootState) => state.user.usersList;
export const sortUsersBy = (state: RootState) => state.user.sortBy;
