import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './UserProfile.module.scss';
import BaseButton from 'components/BaseButton';
import BaseInput from 'components/BaseInput';
import BaseTextArea from 'components/BaseTextArea';
import { User, Address } from 'models/User';
import { useTypedSelector } from 'store/store';
import { useEffect, useState } from 'react';

type FormValues = Pick<
  User,
  'name' | 'username' | 'email' | 'phone' | 'website'
> &
  Pick<Address, 'city' | 'street' | 'zipcode'> & { comment: string };

const UserProfile = () => {
  const [editable, setEditable] = useState(false);
  const selectedUser = useTypedSelector(
    (state) => state.user.selectedUser
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  useEffect(reset, [selectedUser, reset, editable]);
  useEffect(() => setEditable(false), [selectedUser]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!editable) return;
    console.log(data);
  };

  return selectedUser ? (
    <section>
      <header className={styles.header}>
        <h1>Профиль пользователя</h1>
        <BaseButton onClick={() => setEditable((prev) => !prev)}>
          Редактировать
        </BaseButton>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <BaseInput
          disabled={!editable}
          defaultValue={selectedUser.name}
          error={Boolean(errors.name)}
          {...register('name', { required: true })}
          label="name"
        />
        <BaseInput
          disabled={!editable}
          defaultValue={selectedUser.username}
          error={Boolean(errors.username)}
          {...register('username', { required: true })}
          label="User name"
        />
        <BaseInput
          disabled={!editable}
          defaultValue={selectedUser.email}
          error={Boolean(errors.email)}
          {...register('email', { required: true })}
          label="E-mail"
        />
        <BaseInput
          disabled={!editable}
          defaultValue={selectedUser.address.street}
          error={Boolean(errors.street)}
          {...register('street', { required: true })}
          label="Street"
        />
        <BaseInput
          disabled={!editable}
          defaultValue={selectedUser.address.city}
          error={Boolean(errors.city)}
          {...register('city', { required: true })}
          label="City"
        />
        <BaseInput
          disabled={!editable}
          defaultValue={selectedUser.address.zipcode}
          error={Boolean(errors.zipcode)}
          {...register('zipcode', { required: true })}
          label="Zip code"
        />
        <BaseInput
          disabled={!editable}
          defaultValue={selectedUser.phone}
          error={Boolean(errors.phone)}
          {...register('phone', { required: true })}
          label="Phone"
        />
        <BaseInput
          disabled={!editable}
          defaultValue={selectedUser.website}
          error={Boolean(errors.website)}
          {...register('website', { required: true })}
          label="Website"
        />
        <BaseTextArea {...register('comment')} label="Comment" />
      </form>
      <BaseButton
        variant={
          Object.keys(errors).length === 0 ? 'success' : undefined
        }
        disabled={!editable}
        onClick={handleSubmit(onSubmit)}
        className={styles.submitBtn}
      >
        Отправить
      </BaseButton>
    </section>
  ) : null;
};

export default UserProfile;
