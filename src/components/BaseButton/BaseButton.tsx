import classNames from 'classnames';
import styles from './BaseButton.module.scss';

type Props = {
  variant?: 'success' | 'link';
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const BaseButton: React.FC<Props> = ({
  variant = '',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(className, styles.btn, styles[variant])}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
