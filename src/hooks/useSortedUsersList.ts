import { User } from 'models/User';
import {
  sortUsersBy,
  usersList,
} from 'store/reducers/user/userSelectors';
import { useTypedSelector } from 'store/store';
import { deepClone } from 'utils/object';

export const useSortedUsersList = (): User[] | undefined => {
  const users = useTypedSelector(usersList);
  const sortBy = useTypedSelector(sortUsersBy);

  if (!sortBy || !users) return users;

  const sortedUsers = deepClone(users);
  return sortedUsers.sort((a, b) => {
    switch (sortBy) {
      case 'city':
        return a.address.city.localeCompare(b.address.city);
      case 'name':
        return a.company.name.localeCompare(b.company.name);
      default:
        return 0;
    }
  });
};
