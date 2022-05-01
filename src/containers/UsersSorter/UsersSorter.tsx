import styles from './UsersSorter.module.scss';
import BaseButton from 'components/BaseButton';
import { setSortBy } from 'store/reducers/user/userSlice';
import { useAppDispatch, useTypedSelector } from 'store/store';
import {
  sortUsersBy,
  userLoading,
} from 'store/reducers/user/userSelectors';

const UsersSorter = () => {
  const sortBy = useTypedSelector(sortUsersBy);
  const loading = useTypedSelector(userLoading);
  const dispatch = useAppDispatch();

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Сортировка</h2>
      <BaseButton
        disabled={loading || sortBy === 'city'}
        onClick={() => dispatch(setSortBy('city'))}
      >
        по городу
      </BaseButton>
      <BaseButton
        disabled={loading || sortBy === 'name'}
        onClick={() => dispatch(setSortBy('name'))}
      >
        по компании
      </BaseButton>
    </section>
  );
};

export default UsersSorter;
