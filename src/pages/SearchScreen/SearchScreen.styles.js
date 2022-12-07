import { StyleSheet } from "react-native";
import colors from "../../consts/color";
const styles = StyleSheet.create({
  searcInput: {
    height: 40,
    marginTop: 15,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 30,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  guestInput: {
    height: 70,
    marginTop: 15,
    backgroundColor: colors.white,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    height: 250,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
  },
  iconContainer: {
    position: "absolute",
    height: 60,
    width: 60,
    backgroundColor: colors.primary,
    top: -50,
    right: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  priceTag: {
    height: 35,
    alignItems: "center",
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
  },
});

export default styles;
