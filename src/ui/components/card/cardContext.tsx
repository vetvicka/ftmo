import { createContext, useContext } from 'react';

export type CardContextType = {
  isVisible: boolean;
  toggle: () => void;
};

export const CardContext = createContext<CardContextType | undefined>(undefined);

export function useCardContext(): CardContextType {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('Using useCardContext outside of CardContext.Provider');
  }
  return context;
}
