import styles from './UserProfile.module.scss';
import BaseButton from 'components/BaseButton';
import BaseInput from 'components/BaseInput';
import BaseTextArea from 'components/BaseTextArea';

const UserProfile = () => {
  return (
    <section>
      <header className={styles.header}>
        <h1>Профиль пользователя</h1>
        <BaseButton>Редактировать</BaseButton>
      </header>
      <form className={styles.form}>
        <BaseInput label="name" />
        <BaseInput label="User name" />
        <BaseInput label="E-mail" />
        <BaseInput label="Street" />
        <BaseInput label="City" />
        <BaseInput label="Zip code" />
        <BaseInput label="Phone" />
        <BaseInput label="Website" />
        <BaseTextArea label="Comment" />
      </form>
      <BaseButton className={styles.submitBtn}>Отправить</BaseButton>
    </section>
  );
};

export default UserProfile;
