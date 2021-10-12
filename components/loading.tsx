import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Loading(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather is loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aeaeae'
  },
  text: {
    fontSize: 18,
    color: '#333'
  }
})
