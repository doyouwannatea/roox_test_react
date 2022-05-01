import classNames from 'classnames';
import styles from './BaseTextArea.module.scss';
import inputStyles from '../BaseInput/BaseInput.module.scss';

type Props = {
  error?: boolean;
  label?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const BaseTextArea: React.FC<Props> = ({
  error,
  label,
  className,
  ...props
}) => {
  return (
    <label className={inputStyles.container}>
      <span className={inputStyles.label}>{label}</span>
      <textarea
        className={classNames(
          className,
          styles.textarea,
          inputStyles.input,
          {
            [inputStyles.error]: error,
          }
        )}
        {...props}
      />
    </label>
  );
};

export default BaseTextArea;
