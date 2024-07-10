import React from 'react';
import { View, Text } from 'react-native';
import { voltageGridStyles as styles } from './style';

interface VoltageDisplayProps {
    label: string;
    value: any;
}

export const VoltageGrid : React.FC<VoltageDisplayProps> = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}V</Text>
    </View>
  );
};