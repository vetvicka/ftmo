import styles from './badge.module.css';

export function Badge({ children, outline }: { children: React.ReactNode; outline?: boolean }) {
  return <div className={`${styles.badge} ${outline ? styles.outline : ''}`}>{children}</div>;
}
