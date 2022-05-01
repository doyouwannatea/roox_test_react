import styles from './UsersList.module.scss';
import UserCard from 'components/UserCard';

const UsersList = () => {
  return (
    <section>
      <h1 className={styles.title}>Список пользователей</h1>
      <ul className={styles.list}>
        <li>
          <UserCard />
        </li>
        <li>
          <UserCard />
        </li>
        <li>
          <UserCard />
        </li>
        <li>
          <UserCard />
        </li>
        <li>
          <UserCard />
        </li>
      </ul>
      <div className={styles.usersFound}>
        Найдено 10 пользователей
      </div>
    </section>
  );
};

export default UsersList;
