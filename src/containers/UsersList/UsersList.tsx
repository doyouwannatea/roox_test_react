import styles from './UsersList.module.scss';
import UserCard from 'components/UserCard';
import { useGetUsersQuery } from 'api/jsonPlaceholderApi';
import { useAppDispatch, useTypedSelector } from 'store/store';
import { useSortedUsersList } from 'hooks/useSortedUsersList';
import { userLoading } from 'store/reducers/user/userSelectors';
import { User } from 'models/User';
import { selectUser } from 'store/reducers/user/userSlice';

const UsersList = () => {
  useGetUsersQuery();
  const dispatch = useAppDispatch();
  const usersList = useSortedUsersList();
  const loading = useTypedSelector(userLoading);

  function onSelectUser(user: User) {
    dispatch(selectUser(user));
  }

  return (
    <section>
      <h1 className={styles.title}>Список пользователей</h1>
      {loading && 'loading...'}
      <ul className={styles.list}>
        {usersList?.map((user) => (
          <li key={user.id}>
            <UserCard user={user} onClick={onSelectUser} />
          </li>
        ))}
      </ul>
      <div className={styles.usersFound}>
        {usersList?.length
          ? `Найдено ${usersList.length} пользователей`
          : 'пользователи не найдены'}
      </div>
    </section>
  );
};

export default UsersList;
