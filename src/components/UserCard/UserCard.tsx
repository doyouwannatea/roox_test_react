import styles from './UserCard.module.scss';
import BaseButton from 'components/BaseButton';
import BaseList from 'components/BaseList';
import { User } from 'models/User';

type Props = {
  user: User;
  onClick?: (user: User) => void;
};

const UserCard: React.FC<Props> = ({ user, onClick }) => {
  return (
    <section className={styles.card}>
      <BaseList
        items={[
          { key: 1, title: 'ФИО:', value: user.name },
          { key: 2, title: 'город:', value: user.address.city },
          { key: 3, title: 'компания:', value: user.company.name },
        ]}
      />
      <BaseButton
        onClick={() => onClick && onClick(user)}
        variant="link"
        className={styles.cardButton}
      >
        Подробнее
      </BaseButton>
    </section>
  );
};

export default UserCard;
