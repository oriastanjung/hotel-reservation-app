import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import styles from "./Card.styles";
const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;

const Card = ({ hotel, index, activeCardIndex, scrollX, onPress }) => {
  // const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  // const scrollX = React.useRef(new Animated.Value(0)).current;
  const inputRange = [
    (index - 1) * cardWidth,
    index * cardWidth,
    (index + 1) * cardWidth,
  ];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.7, 0, 0.7],
  });

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.8, 1, 0.8],
  });

  return (
    <TouchableOpacity
      disabled={activeCardIndex != index}
      activeOpacity={1}
      // onPress={() => navigation.navigate("Search Screen", hotel)}
      onPress={onPress}
    >
      <Animated.View style={{ ...styles.card, transform: [{ scale }] }}>
        <Animated.View style={{ ...styles.cardOverLay, opacity }} />
        <View style={styles.location}>
          <Image
            source={{ uri: `https://${hotel.thumbnail}` }}
            style={styles.cardImage}
            resizeMode={"stretch"}
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              paddingHorizontal: 10,
              paddingBottom: 15,
            }}
          >
            {hotel.hotel_name}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Card;
