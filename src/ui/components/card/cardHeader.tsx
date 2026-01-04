import styles from './card.module.css';
import { useCardContext } from './cardContext';
import { Toggle } from '../../primitives/toggle/toggle';

type CardHeaderProps = {
  children: React.ReactNode;
};

export function CardHeader({ children }: CardHeaderProps) {
  const { isVisible, toggle } = useCardContext();

  return (
    <div className={styles.cardHeader}>
      <div>{children}</div>
      <div className={styles.cardToggle}>
        <span className={`${styles.toggleLabel} lg label`}>Visible</span>{' '}
        <Toggle checked={isVisible} onChange={toggle} />
      </div>
    </div>
  );
}
