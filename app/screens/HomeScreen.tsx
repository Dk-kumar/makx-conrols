import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '@/components/Header';
import { 
  PhaseIndicator, 
  ControlButtons, 
  VoltageDisplay, 
  CurrentDisplay, 
  Timers,
  MotorRunningTime 
} from '@/components/homeComponent';
import ToggleSwitch from '@/components/button/ToggleSwitch';
import CircularTimer from '@/components/button/CircularTimer';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header username="Deepan Kumar" />
      <View style={styles.row}>
        <PhaseIndicator />
        <ControlButtons />
        <View>
          <ToggleSwitch option1="3 PH" option2="1/3 PH" />
          <ToggleSwitch option1="AUTO" option2="MANUAL" />
        </View>
      </View>
      <View style={styles.row}>
        <VoltageDisplay label="L1" value="0" />
        <VoltageDisplay label="L2" value="0" />
        <VoltageDisplay label="L3" value="0" />
      </View>
      <View style={styles.row}>
        <CurrentDisplay label="A1" value="0.0" />
        <CurrentDisplay label="A2" value="0.0" />
      </View>
      <Timers />
      <View style={styles.row}>
        <CircularTimer label="OFF TIME" time="0000" offTime="0000" />
        <CircularTimer label="Time" time="0000" offTime="0000" />
        <CircularTimer label="Time" time="0000" offTime="0000" />
      </View>
      <MotorRunningTime />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});

export default HomeScreen;
