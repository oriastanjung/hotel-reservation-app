import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./TopHotelCard.styles";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../consts/color";

const TopHotelCard = (props) => {
  const { hotel } = props;
  return (
    <Pressable style={styles.topHotelCard} onPress={props.onPress}>
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
          5.0
        </Text>
      </View>
      <Image style={styles.topHotelCardImage} source={hotel.image} />
      <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>{hotel.name}</Text>
        <Text style={{ fontSize: 7, fontWeight: "bold", color: colors.grey }}>
          {hotel.location}
        </Text>
      </View>
    </Pressable>
  );
};

export default TopHotelCard;
