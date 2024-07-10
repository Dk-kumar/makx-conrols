import { StyleSheet } from "react-native";

export const timerModesStyles = StyleSheet.create({
  timerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    alignItems: "center",
    display: "flex",
    fontSize: 16,
    width: 100,
    textAlign: "center",
    paddingBottom: 4,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
