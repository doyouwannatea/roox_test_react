import classNames from 'classnames';
import styles from './BaseInput.module.scss';

type Props = {
  error?: boolean;
  label?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const BaseInput: React.FC<Props> = ({
  error,
  label,
  className,
  ...props
}) => {
  return (
    <label className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input
        className={classNames(className, styles.input, {
          [styles.error]: error,
        })}
        {...props}
      />
    </label>
  );
};

export default BaseInput;
