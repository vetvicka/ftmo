import { useState, createContext, useContext } from 'react';

import styles from './card.module.css';

type CardContextType = {
  isVisible: boolean;
  toggle: () => void;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export function useCardContext(): CardContextType {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('Using useCardContext outside of CardContext.Provider');
  }
  return context;
}

export function Card({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <CardContext.Provider value={{ isVisible, toggle: () => setIsVisible(!isVisible) }}>
      <div className={`${styles.card} ${isVisible ? '' : styles.hidden}`}>{children}</div>
    </CardContext.Provider>
  );
}
