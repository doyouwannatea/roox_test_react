import styles from './LayoutWithSidebar.module.scss';

type Props = {
  sidebar?: React.ReactNode;
};

const LayoutWithSidebar: React.FC<Props> = ({
  children,
  sidebar,
}) => {
  return (
    <section className={styles.container}>
      <aside className={styles.sidebar}>{sidebar}</aside>
      <main className={styles.main}>{children}</main>
    </section>
  );
};

export default LayoutWithSidebar;
