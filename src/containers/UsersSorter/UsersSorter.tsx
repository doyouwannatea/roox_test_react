import styles from './UsersSorter.module.scss';
import BaseButton from 'components/BaseButton';

const UsersSorter = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Сортировка</h2>
      <BaseButton>по городу</BaseButton>
      <BaseButton>по компании</BaseButton>
    </section>
  );
};

export default UsersSorter;
