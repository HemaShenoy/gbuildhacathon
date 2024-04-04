// Context.js
import { createContext, useContext } from 'react';

const MyContext = createContext(null); // Provide a default value here

export const useMyContext = () => {
  return useContext(MyContext);
};

export const MyContextProvider = ({ children }) => {
  const value = { /* Your context value */ };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
