import styles from './UsersSorter.module.scss';
import BaseButton from 'components/BaseButton';
import { setSortBy } from 'store/reducers/user/userSlice';
import { useAppDispatch } from 'store/store';

const UsersSorter = () => {
  const dispatch = useAppDispatch();

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Сортировка</h2>
      <BaseButton onClick={() => dispatch(setSortBy('city'))}>
        по городу
      </BaseButton>
      <BaseButton onClick={() => dispatch(setSortBy('name'))}>
        по компании
      </BaseButton>
    </section>
  );
};

export default UsersSorter;
