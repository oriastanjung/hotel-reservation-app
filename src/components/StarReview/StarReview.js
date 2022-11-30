import { View, Text, Image } from "react-native";
import React from "react";
import { images, icons, COLORS, FONTS, SIZES } from "../../consts";

const StarReview = ({ rate }) => {
  var starComponents = [];
  var fullStar = Math.floor(rate);
  var noStar = Math.floor(5 - rate);
  var halfStar = 5 - fullStar - noStar;

  // Full Star
  for (var i = 0; i < fullStar; i++) {
    starComponents.push(
      <Image
        key={`full-${i}`}
        source={icons.starFull}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />
    );
  }

  // Half Star
  for (var i = 0; i < halfStar; i++) {
    starComponents.push(
      <Image
        key={`half-${i}`}
        source={icons.starHalf}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />
    );
  }

  // No Star
  for (var i = 0; i < noStar; i++) {
    starComponents.push(
      <Image
        key={`empty-${i}`}
        source={icons.starEmpty}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />
    );
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {starComponents}
      <Text
        style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}
      >
        {rate}
      </Text>
    </View>
  );
};

export default StarReview;
