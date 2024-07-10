import React from 'react';
import { View, Text } from 'react-native';
import { phaseIndicatorStyles as styles } from './style';


const PhaseIndicator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.phaseText}>PHASE</Text>
      <Text style={styles.phaseNumber}>1</Text>
    </View>
  );
};

export default PhaseIndicator