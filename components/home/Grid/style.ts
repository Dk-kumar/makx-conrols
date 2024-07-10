import { StyleSheet } from "react-native";

export const ampereGridStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(232, 142, 7)",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  label: {
    color: "#fff",
    fontSize: 16,
  },
  value: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export const voltageGridStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  label: {
    color: "#fff",
    fontSize: 16,
  },
  value: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
