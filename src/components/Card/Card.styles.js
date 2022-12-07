import { Dimensions, StyleSheet } from "react-native";
import colors from "../../consts/color";
const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;
const styles = StyleSheet.create({
  card: {
    height: 250,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    paddingBottom: 50,
    backgroundColor: colors.white,
  },

  cardImage: {
    width: "100%",
    height: 200,
    // marginTop: 10,
    marginBottom: 10,
    // borderRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardOverLay: {
    height: 220,
    backgroundColor: colors.white,
    position: "absolute",
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
  location: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    // marginTop: 160,
  },
});
export default styles;
