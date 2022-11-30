import * as React from "react";
import { View, Button, Text } from "react-native";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home ini mah</Text>
      <Button
        title="Go to Login Page"
        onPress={() => navigation.navigate("Login Page")}
      />
      <Button
        title="Go to Detail Page"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Home Screen Page"
        onPress={() => navigation.navigate("Home Screen Page")}
      />
      <Button
        title="Go to Search Screen Page"
        onPress={() => navigation.navigate("Search Screen Page")}
      />
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
      <BottomNavbar />
    </View>
  );
};

export default Home;
