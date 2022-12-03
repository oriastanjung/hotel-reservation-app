import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from "../../consts/color";
import { useNavigation } from "@react-navigation/native";
import style from "./CardSearch.styles";
import useCardSearch from "./useCardSearch";
const CardSearch = ({ data, checkin, checkout, onPress }) => {
  const navigation = useNavigation();
  const { price } = useCardSearch({ data, checkin, checkout });
  return (
    <Pressable style={{ width: 200, marginRight: 25 }} onPress={onPress}>
      {/* <Text>{price && console.log("price >>> ", price)}</Text> */}
      {/* {data && console.log("{data} >>> ", data)} */}
      <ImageBackground
        style={style.headerImage}
        source={{ uri: `https://${data.thumbnail}` }}
      >
        <View style={style.header}>
          <Ionicons
            name="arrow-back"
            size={28}
            color={colors.primary}
            onPress={navigation.goBack}
          />
          <Ionicons name="heart-circle" size={28} color={colors.primary} />
        </View>
      </ImageBackground>

      <View>
        <View style={style.iconContainer}>
          <MaterialIcons name="place" color={colors.white} size={28} />
        </View>

        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {data.hotel_name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: colors.grey,
              marginTop: 5,
            }}
          >
            {/* {{data}.address.city_name} */}
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons name="star" size={20} color={colors.orange} />
                <MaterialIcons name="star" size={20} color={colors.orange} />
                <MaterialIcons name="star" size={20} color={colors.orange} />
                <MaterialIcons name="star" size={20} color={colors.orange} />
                <MaterialIcons name="star" size={20} color={colors.grey} />
              </View>
              <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 5 }}>
                {data.star_rating}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            Price Per Night
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "bold",
                color: colors.grey,
                marginLeft: 5,
              }}
            >
              $ {price}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CardSearch;
