/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable
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
} from './';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const ThemeColors = useColorScheme() === 'dark' ? DarkColors : LightColors;
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.header3,
          {
            color: ThemeColors.onSurface,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.body,
          {
            color: ThemeColors.onSurface,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const ThemeColors = isDarkMode ? DarkColors : LightColors;

  const backgroundStyle = {
    backgroundColor: ThemeColors.surface
  }
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function onLoginPressed() {
    setIsLoggedIn(true);
  }

  function onLogoutPressed() {
    setIsLoggedIn(false);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={[styles.header3, {margin: 24, color: ThemeColors.primary}]}>
        nicea
      </Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: ThemeColors.surface,
          }}>
          {!isLoggedIn ? (
            <Section title="Login">
              Edit <Text style={styles.superHeavy}>App.tsx</Text> to change this
              screen and then come back to see your edits.
              <Pressable style={[styles.primaryButton, {backgroundColor: ThemeColors.onSurface}]} onPress={onLoginPressed}>
                <Text style={[styles.body, {color: ThemeColors.surface}]}>Login</Text>
              </Pressable>
            </Section>
          ) : (
            <Section title="Logout">
              Read the docs to discover what to do next:
              <Pressable style={[styles.primaryButton, {backgroundColor: ThemeColors.onSurface}]} onPress={onLogoutPressed}>
                <Text style={[styles.body, {color: ThemeColors.surface}]}>Logout</Text>
              </Pressable>
            </Section>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
