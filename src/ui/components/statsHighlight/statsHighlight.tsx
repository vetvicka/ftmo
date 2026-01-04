import styles from './statsHighlight.module.css';

type StatsProps = {
  label: string;
  value: number;
};

export function StatsHighlight({ label, value }: StatsProps) {
  return (
    <div className={styles.statsHighlight}>
      <div className={`${styles.label} md body`}>{label}</div>
      <div className={`${styles.value} ${value >= 0 ? styles.positive : styles.negative}`}>
        {value}
      </div>
    </div>
  );
}
