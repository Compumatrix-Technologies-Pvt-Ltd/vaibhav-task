import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextProps {
  children: ReactNode;
}

interface MyContextValue {
  value: string;
  setValue: (newValue: string) => void;
}

const MyContext = createContext<MyContextValue | undefined>(undefined);

export const MyContextProvider: React.FC<MyContextProps> = ({ children }) => {
  const [value, setValue] = useState<string>(''); 

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
