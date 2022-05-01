import styles from './UserCard.module.scss';
import BaseButton from 'components/BaseButton';
import BaseList from 'components/BaseList';

const UserCard = () => {
  return (
    <section className={styles.card}>
      <BaseList
        items={[
          { key: 1, title: 'ФИО:', value: 'Иван Иванов' },
          { key: 2, title: 'город:', value: 'Москва' },
          { key: 3, title: 'компания:', value: 'ООО “Пример”' },
        ]}
      />
      <BaseButton variant="link" className={styles.cardButton}>
        Подробнее
      </BaseButton>
    </section>
  );
};

export default UserCard;
