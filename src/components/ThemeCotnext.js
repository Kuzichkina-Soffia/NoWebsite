import React from "react";

export const themes = {
  light: {
    background: '#FFFFFF',
    textColor: '#000000',
  },
  dark: {
    background: '#0e0e0e',
    textColor: '#ffffff',
  }
}

export const ThemeContext = React.createContext(themes.dark)