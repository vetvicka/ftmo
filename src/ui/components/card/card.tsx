import { useState } from 'react';

import styles from './card.module.css';
import { CardContext } from './cardContext';

export function Card({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <CardContext.Provider value={{ isVisible, toggle: () => setIsVisible(!isVisible) }}>
      <div className={`${styles.card} ${isVisible ? '' : styles.hidden}`}>{children}</div>
    </CardContext.Provider>
  );
}
