import styles from './card.module.css';

export function CardBody({ children }: { children: React.ReactNode }) {
  console.log('WTF', styles);
  return (
    <div className={styles.cardBody}>
      <hr />
      <div>{children}</div>
    </div>
  );
}
