/**
 * Entry point for the Nicaea app
 */

import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {
  authorize,
  signout
} from 'react-native-app-auth';

// Local Resources
import {
  LightColors,
  DarkColors,
  styles,
  ThemeContext,
  LoginScreen,
} from './';

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState(
    {
      colors: isDarkMode ? DarkColors : LightColors,
      styles: styles
    }
  );

  return (
    <ThemeContext.Provider value={theme}>
        <SafeAreaView>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={theme.colors.surface}
          />
          <Text style={[styles.header3, {margin: 24, color: theme.colors.primary}]}>
            nicea
          </Text>
          <LoginScreen />
        </SafeAreaView>
    </ThemeContext.Provider>
  );
}
