import React, {useState, useContext} from 'react';

import {
  ScrollView,
  Text,
  View,
  Pressable,
} from 'react-native';

import Section from './Section';
import useTheme from '../contexts/ThemeContext';

export default function LoginScreen(): JSX.Element {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useTheme();

  function onLoginPressed() {
    setIsLoggedIn(true);
  }

  function onLogoutPressed() {
    setIsLoggedIn(false);
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={{backgroundColor: theme.colors.surface,}}>
        {!isLoggedIn ? (
          <Section title="Login">
            Edit <Text style={theme.styles.superHeavy}>App.tsx</Text> to change this
            screen and then come back to see your edits.
            <Pressable style={[theme.styles.primaryButton, {backgroundColor: theme.colors.onSurface}]} onPress={onLoginPressed}>
              <Text style={[theme.styles.body, {color: theme.colors.surface}]}>Login</Text>
            </Pressable>
          </Section>
        ) : (
          <Section title="Logout">
            Read the docs to discover what to do next:
            <Pressable style={[theme.styles.primaryButton, {backgroundColor: theme.colors.onSurface}]} onPress={onLogoutPressed}>
              <Text style={[theme.styles.body, {color: theme.colors.surface}]}>Logout</Text>
            </Pressable>
          </Section>
        )}
      </View>
    </ScrollView>
  );
}