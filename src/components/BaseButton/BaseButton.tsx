import classNames from 'classnames';
import styles from './BaseButton.module.scss';

type Props = {
  className?: string;
  disabled?: boolean;
  variant?: 'success' | 'link';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const BaseButton: React.FC<Props> = ({
  variant = '',
  disabled,
  children,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames([className, styles.btn, styles[variant]])}
    >
      {children}
    </button>
  );
};

export default BaseButton;
