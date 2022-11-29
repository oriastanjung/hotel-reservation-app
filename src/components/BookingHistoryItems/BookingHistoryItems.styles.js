import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    flex: 0.3,
    width: 120,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
  },
  info: {
    flex: 0.6,
    marginHorizontal: 10,
  },
  rate: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  infoTitle: {
    fontFamily: "sans-serif-medium",
    fontSize: 18,
  },
  infoAddress: {
    fontFamily: "sans-serif-light",
    fontStyle: "italic",
    fontSize: 16,
  },
  infoDesc: {
    fontFamily: "sans-serif-light",
    fontSize: 15,
  },
  rateText: {
    textAlign: "center",
    fontFamily: "sans-serif-medium",
    fontSize: 14,
    fontWeight: "900",
    color: "#7FE9DE",
  },
});
export default styles;
