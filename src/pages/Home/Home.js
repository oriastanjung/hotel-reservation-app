import * as React from "react";
import { View, Button, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home ini mah</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Booking Page")}
      />
    </View>
  );
};

export default Home;
