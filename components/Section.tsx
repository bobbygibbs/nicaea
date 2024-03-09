import React, {useContext} from 'react';
import type {PropsWithChildren} from 'react';

import {
  Text,
  View,
} from 'react-native';

import useTheme from '../contexts/ThemeContext';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export default function Section({children, title}: SectionProps): JSX.Element {
  const theme = useTheme();

  return (
    <View style={theme.styles.sectionContainer}>
      <Text
        style={[
          theme.styles.header3,
          {
            color: theme.colors.onSurface,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          theme.styles.body,
          {
            color: theme.colors.onSurface,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}