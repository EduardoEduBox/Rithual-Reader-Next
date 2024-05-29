"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface FirstTimeContextType {
  isFirstTime: boolean;
  setIsFirstTime: (value: boolean) => void;
}

const FirstTimeContext = createContext<FirstTimeContextType | undefined>(
  undefined
);

export const FirstTimeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  return (
    <FirstTimeContext.Provider value={{ isFirstTime, setIsFirstTime }}>
      {children}
    </FirstTimeContext.Provider>
  );
};

export const useFirstTime = (): FirstTimeContextType => {
  const context = useContext(FirstTimeContext);
  if (!context) {
    throw new Error("useFirstTime must be used within a FirstTimeProvider");
  }
  return context;
};
