import { createContext, useContext } from 'react';

export const ThemeContext = createContext(null);
export default function useTheme() { return useContext(ThemeContext) }