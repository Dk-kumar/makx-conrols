import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import Header from "@/app/components/header";
import ToggleSwitch from "@/app/components/button/ToggleSwitch";
import CircularTimer from "@/app/components/button/CircularTimer";
import TimerModes from "@/app/components/home/timerModes";
import PowerSwitch from "@/app/components/home/powerSwitch";
import PhaseIndicator from "@/app/components/home/phaseIndicator";

import { MotorRunningTime } from "@/app/components/home/motor/MotorRunningTime";
import { AmpereGrid, VoltageGrid } from "@/app/components/home/Grid";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header username="Deepan Kumar" />

      <View style={styles.containerWrapper}>
        <View>
          <Feather name="settings" size={24} color="black" />
        </View>

        <View style={styles.row}>
          <PhaseIndicator />
          <PowerSwitch />
          <View>
            <ToggleSwitch option1="3 PH" option2="1/3 PH" />
            <ToggleSwitch option1="AUTO" option2="MANUAL" />
          </View>
        </View>

        <View style={styles.row}>
          <VoltageGrid label="L1" value="0" />
          <VoltageGrid label="L2" value="0" />
          <VoltageGrid label="L3" value="0" />
        </View>

        <View style={styles.row}>
          <AmpereGrid label="A1" value="0.0" />
          <AmpereGrid label="A2" value="0.0" />
        </View>

        <TimerModes />

        <View style={styles.row}>
          <CircularTimer label="OFF TIME" time="0000" offTime="0000" />
          <CircularTimer label="Time" time="0000" offTime="0000" />
          <CircularTimer label="Time" time="0000" offTime="0000" />
        </View>

        <MotorRunningTime />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  containerWrapper: {
    padding: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});

export default HomeScreen;
