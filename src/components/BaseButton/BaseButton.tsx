import classNames from 'classnames';
import styles from './BaseButton.module.scss';

type Props = {
  disabled?: boolean;
  variant?: 'success';
};

const BaseButton: React.FC<Props> = ({
  variant = '',
  disabled,
  children,
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames([styles.btn, styles[variant]])}
    >
      {children}
    </button>
  );
};

export default BaseButton;
