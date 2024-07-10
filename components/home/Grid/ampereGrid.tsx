import React from "react";
import { View, Text } from "react-native";
import { ampereGridStyles as styles } from "./style";

interface CurrentDisplayProps {
  label: string;
  value: any;
}

export const AmpereGrid: React.FC<CurrentDisplayProps> = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}A</Text>
    </View>
  );
};
