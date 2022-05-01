import styles from './UsersList.module.scss';
import UserCard from 'components/UserCard';
import { useLayoutEffect, useState } from 'react';
import { User } from 'models/User';
import { jsonPlaceholderApi } from 'api/JsonPlaceholderApi';

const UsersList = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[] | undefined>(undefined);

  useLayoutEffect(() => {
    async function getUsers() {
      setLoading(true);
      const users = await jsonPlaceholderApi.getUsers();
      setUsers(users);
      setLoading(false);
    }
    getUsers();
  }, []);

  return (
    <section>
      <h1 className={styles.title}>Список пользователей</h1>
      {loading && 'loading...'}
      <ul className={styles.list}>
        {users?.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
      <div className={styles.usersFound}>
        {users?.length
          ? `Найдено ${users.length} пользователей`
          : 'пользователи не найдены'}
      </div>
    </section>
  );
};

export default UsersList;
