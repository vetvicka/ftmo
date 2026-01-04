import styles from './button.module.css';

type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <div className={`${styles.button} heading md`}>
      <span className={styles.label}>{children}</span>
    </div>
  );
}
