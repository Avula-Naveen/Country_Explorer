import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage if available
    const savedMode = JSON.parse(localStorage.getItem("darkMode"));
    return savedMode !== null ? savedMode : false;
  });

  useEffect(() => {
    // Save to localStorage on change
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Apply theme
    document.body.style.backgroundColor = darkMode ? "black" : "white";
    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy use
export const useTheme = () => useContext(ThemeContext);
