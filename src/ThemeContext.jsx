// ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Создаем контекст
const ThemeContext = createContext();

// Компонент для предоставления темы
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Хук для использования контекста темы
export const useTheme = () => useContext(ThemeContext);
