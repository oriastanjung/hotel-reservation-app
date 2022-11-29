import * as React from "react";
import { View, Button, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home ini mah</Text>
      <Button
        title="Go to Booking Page"
        onPress={() => navigation.navigate("Booking Page")}
      />
      <Button
        title="Go to Booking History Page"
        onPress={() => navigation.navigate("Booking History Page")}
      />
      <Button
        title="Go to Profile Page"
        onPress={() => navigation.navigate("Profile Page")}
      />
    </View>
  );
};

export default Home;
