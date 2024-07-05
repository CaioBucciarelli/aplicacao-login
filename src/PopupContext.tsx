// src/context/PopupContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface PopupContextProps {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

const PopupContext = createContext<PopupContextProps | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <PopupContext.Provider value={{ showPopup, setShowPopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
