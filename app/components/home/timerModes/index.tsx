import React from "react";
import { View, Text, Switch } from "react-native";
import { timerModesStyles as styles } from "./style";

interface TimerDisplayProps {
  label: string;
  value: any;
}

export const Timer: React.FC<TimerDisplayProps> = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch value={value} />
    </View>
  );
};

const TimerModes = () => {
  return (
    <View style={styles.timerContainer}>
      <Timer label="Cyclic Timer" value={false} />
      <Timer label="Run Timer" value={true} />
      <Timer label="Dry Run Restart Timer" value={false} />
    </View>
  );
};

export default TimerModes;
