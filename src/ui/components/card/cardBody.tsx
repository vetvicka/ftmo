import styles from './card.module.css';

export function CardBody({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.cardBody}>
      <hr />
      <div>{children}</div>
    </div>
  );
}
