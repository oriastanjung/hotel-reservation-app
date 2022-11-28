import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 2,
  },
  summary: {
    fontFamily: "sans-serif-medium",
    borderBottomColor: "#7FE9DE",
    paddingBottom: 6,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  profile: {
    fontFamily: "sans-serif-light",
    marginBottom: 10,
  },
  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    color: "#7FE9DE",
    fontFamily: "sans-serif-medium",
    fontWeight: "900",
    fontSize: 18,
  },
  totalText: {
    fontSize: 17,
    fontFamily: "sans-serif-light",
  },
});
export default styles;
