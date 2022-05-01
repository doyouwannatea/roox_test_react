import styles from './BaseList.module.scss';

export type ListItem = {
  key: React.Key;
  title: string;
  value: string;
};
type Props = {
  items: ListItem[];
};
const BaseList: React.FC<Props> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.key} className={styles.item}>
          <span className={styles.itemTitle}>{item.title}</span>
          <span className={styles.itemValue}>{item.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default BaseList;
