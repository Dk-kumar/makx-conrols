import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { powerSwitchStyles as styles } from "./style";

const PowerSwitch = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="power-off" size={30} color="green" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="power-off" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default PowerSwitch;
