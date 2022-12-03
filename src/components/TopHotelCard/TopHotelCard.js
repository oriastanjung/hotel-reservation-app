import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./TopHotelCard.styles";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../consts/color";
import { useNavigation } from "@react-navigation/native";
const TopHotelCard = (props) => {
  const { hotel } = props;
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate("Details", {
      hotelid_ppn: hotel.hotelid_ppn,
    });
  };
  console.log("props >> ", props);
  return (
    <Pressable style={styles.topHotelCard} onPress={handleOnPress}>
      <View
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          zIndex: 1,
          flexDirection: "row",
        }}
      >
        <Ionicons name="star" size={15} color={colors.orange} />
        <Text
          style={{ color: colors.primary, fontWeight: "bold", fontSize: 15 }}
        >
          {hotel.star_rating}
        </Text>
      </View>
      <Image
        style={styles.topHotelCardImage}
        source={{ uri: `https://${hotel.thumbnail}` }}
      />
      <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>{hotel.name}</Text>
        <Text style={{ fontSize: 7, fontWeight: "bold", color: colors.grey }}>
          {hotel.address.city_name}
        </Text>
      </View>
    </Pressable>
  );
};

export default TopHotelCard;
