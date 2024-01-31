import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 40,
  },
  boldText: {
    fontSize: 30,
    fontWeight: "800",
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
    marginVertical: 4,
  },
  button: {
    borderRadius: 4,
    paddingHorizontal: 20,
    gap: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#560CCE",
    color: "#fff",
  },
});
