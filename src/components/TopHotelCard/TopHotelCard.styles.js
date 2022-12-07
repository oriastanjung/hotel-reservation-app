import { StyleSheet } from "react-native";
import colors from "../../consts/color";

const styles = StyleSheet.create({
  topHotelCard: {
    height: 120,
    width: 120,
    backgroundColor: colors.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 80,
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default styles;
