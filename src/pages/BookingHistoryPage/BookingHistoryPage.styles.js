import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    marginRight: 15,
    backgroundColor: "#7FE9DE",
    borderRadius: 20,
  },
  cardProfile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  profileInfo: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileName: {
    fontSize: 20,
    fontFamily: "sans-serif-light",
  },
  profileEmail: {
    fontSize: 16,
    fontFamily: "sans-serif-thin",
  },
  section: {
    flex: 1,
  },
});

export default styles;
