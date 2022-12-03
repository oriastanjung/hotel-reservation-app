import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import useBookingHistoryPage from "./useBookingHistoryPage";
import avatarImage from "../../../assets/avatar.png";
import BookingHistoryItems from "../../components/BookingHistoryItems/BookingHistoryItems";
import styles from "./BookingHistoryPage.styles";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
const BookingHistoryPage = () => {
  const { name, email, data } = useBookingHistoryPage();

  const renderItem = ({ item }) => <BookingHistoryItems data={item} />;

  return (
    <>
      <View style={styles.section}>
        <View style={styles.cardProfile}>
          <Image source={avatarImage} style={styles.img} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              {name.length > 25 ? name.substring(0, 25) + "..." : name}
            </Text>
            <Text style={styles.profileEmail}>
              {email.length > 30 ? email.substring(0, 30) + "..." : email}
            </Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.hotelid_ppn}
        />
      </View>
      <BottomNavbar />
    </>
  );
};

export default BookingHistoryPage;
