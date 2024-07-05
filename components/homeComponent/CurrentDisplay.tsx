import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CurrentDisplayProps {
    label: string;
    value: any;
}

export const CurrentDisplay : React.FC<CurrentDisplayProps> = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}A</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(232, 142, 7)',
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  value: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
