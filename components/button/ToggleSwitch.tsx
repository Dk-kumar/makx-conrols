import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
} from "react-native";

interface ToggleSwitchProps {
  option1: string;
  option2: string;
  color1?: any;
  color2?: any;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  option1,
  option2,
  color1 = "green",
  color2 = "green",
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const [togglePosition] = useState(new Animated.Value(0));
  const backgroundColor = isToggled ? color1 : color2;

  const handleToggle = () => {
    setIsToggled(!isToggled);
    Animated.timing(togglePosition, {
      toValue: isToggled ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleStyles = {
    transform: [
      {
        translateX: togglePosition.interpolate({
          inputRange: [0, 1],
          outputRange: [-15, 59],
        }),
      },
    ],
  };

  return (
    <TouchableOpacity
      style={[styles.switchContainer, { backgroundColor }]}
      onPress={handleToggle}
    >
      <Text style={styles.toggleText}>{isToggled ? option2 : option1}</Text>
      <Animated.View style={[styles.toggleButton, toggleStyles]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 110,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    justifyContent: "center",
    padding: 5,
    position: "relative",
  },
  toggleButton: {
    width: 25,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    position: "absolute",
    top: 5,
    left: 20,
  },
  toggleText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    position: "absolute",
    width: "100%",
  },
});

export default ToggleSwitch;
