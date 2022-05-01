import classNames from 'classnames';
import styles from './BaseTextArea.module.scss';
import inputStyles from '../BaseInput/BaseInput.module.scss';
import { forwardRef } from 'react';

type Props = {
  error?: boolean;
  label?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const BaseTextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ error, label, className, ...props }, ref) => {
    return (
      <label className={inputStyles.container}>
        <span className={inputStyles.label}>{label}</span>
        <textarea
          ref={ref}
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
  }
);

export default BaseTextArea;
