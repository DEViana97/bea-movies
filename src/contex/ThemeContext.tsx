import React, { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../lib/registry";
import Theme from "../styles/Theme.styled";
import lightTheme from "../styles/LightTheme.styled";

interface ThemeContextProps {
  theme: Theme
  toggleTheme: (newTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentsRegistry>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      </StyledComponentsRegistry>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Error: useTheme must be used within a ThemeContextProvider");
  }
  return context;
};
