import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import me from '../src/help/me'

export default function App() {
  return (
    <View>
      <Text>
        hello world
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
