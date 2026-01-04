import styles from './linkButton.module.css';

type LinkButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function LinkButton({ children, className, onClick }: LinkButtonProps) {
  return (
    // this should be using some semantic elment like button, just dont want to include css resets or any ui library for now.
    <div className={`${styles.linkButton} ${className || ''} heading md`} onClick={onClick}>
      {/* placeholder for real icons */}
      <div className={styles.icon}></div>
      <span className={styles.label}>{children}</span>
    </div>
  );
}
