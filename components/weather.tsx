import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { weatherOptionsService } from '../services/weather-options.service';

type TPropTypes = {
  temp: number;
  condition: string;
};

export const Weather = ({ temp, condition }: TPropTypes): JSX.Element => {
  return (
    <LinearGradient style={styles.container} colors={weatherOptionsService.getGradient(condition)}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptionsService.getIconName(condition)} size={96} color="white" />
        <Text style={styles.text}>{Math.round(temp)}°</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{weatherOptionsService.getTitle(condition)}</Text>
        <Text style={styles.subtitle}>{weatherOptionsService.getSubtitle(condition)}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  text: {
    fontSize: 42,
    color: 'white'
  },
  title: {
    fontSize: 35,
    color: 'white',
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 21,
    color: 'white',
    fontWeight: "600"
  }
})
