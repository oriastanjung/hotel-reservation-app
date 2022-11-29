import { Dimensions, StyleSheet } from "react-native";
import colors from "../../consts/color";
const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;
const styles = StyleSheet.create({
  card: {
    height: 220,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: colors.white,
  },

  cardImage: {
    height: 200,
    width: "100%",
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
    alignItems: "center",
    marginTop: 160,
  },
});
export default styles;
