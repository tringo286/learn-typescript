// src/context/ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define types for the theme context
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create a default value for the context
const defaultContextValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
};

// Create the ThemeContext with a default value
const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// Define the props for the ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};

export default ThemeContext;
