import styles from './badges.module.css';

export function Badges({ children }: { children: React.ReactNode }) {
  return <div className={styles.badges}>{children}</div>;
}
