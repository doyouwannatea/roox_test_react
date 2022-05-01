import classNames from 'classnames';
import styles from './BaseButton.module.scss';

type Props = {
  className?: string;
  disabled?: boolean;
  variant?: 'success' | 'link';
};

const BaseButton: React.FC<Props> = ({
  variant = '',
  disabled,
  children,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames([className, styles.btn, styles[variant]])}
    >
      {children}
    </button>
  );
};

export default BaseButton;
