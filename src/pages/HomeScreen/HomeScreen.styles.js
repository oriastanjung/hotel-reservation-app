import { StyleSheet } from "react-native";
import colors from "../../consts/color";
const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  searcInput: {
    height: 50,
    marginTop: 15,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 30,
    backgroundColor: colors.light,
    flexDirection: "row",
    alignItems: "center",
  },
  guestInput: {
    height: 67,
    marginTop: 15,
    backgroundColor: colors.white,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
