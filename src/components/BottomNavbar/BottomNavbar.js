import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { home_icons, account_icons, booking_icons } from "../../consts/icons";
import { useNavigation } from "@react-navigation/native";

const BottomNavbar = () => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    navbar: {
      width: "100%",
      backgroundColor: "white",
      padding: 10,
      position: "absolute",
      bottom: 0,
      borderWidth: 1,
      borderTopColor: "#52c0b4",
      borderBottomColor: "white",
    },
    icon: {
      width: 35,
      height: 35,
      marginHorizontal: 35,
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.navbar}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Home Screen Page")}>
          <Image source={home_icons} style={styles.icon} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Booking History Page")}>
          <Image source={booking_icons} style={styles.icon} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Profile Page")}>
          <Image source={account_icons} style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

export default BottomNavbar;
