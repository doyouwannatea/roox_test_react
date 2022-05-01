import styles from './UsersList.module.scss';
import UserCard from 'components/UserCard';
import { useGetUsersQuery } from 'api/jsonPlaceholderApi';
import { useTypedSelector } from 'store/store';
import { useSortedUsersList } from 'hooks/useSortedUsersList';
import { userLoading } from 'store/reducers/user/userSelectors';

const UsersList = () => {
  useGetUsersQuery();
  const usersList = useSortedUsersList();
  const loading = useTypedSelector(userLoading);

  return (
    <section>
      <h1 className={styles.title}>Список пользователей</h1>
      {loading && 'loading...'}
      <ul className={styles.list}>
        {usersList?.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
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
