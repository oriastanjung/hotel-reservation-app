import axios from "axios";
import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./BookingHistoryItems.styles";
import useBookingHistoryItems from "./useBookingHistoryItems";
const BookingHistoryItems = (props) => {
  const { dataFetch } = useBookingHistoryItems(props.data.hotelid_ppn);
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={{ uri: `https:${props.data.thumbnail}` }}
      />
      <View style={styles.info}>
        <Text style={styles.infoTitle}>{props.data.hotel_name}</Text>
        {dataFetch && (
          <>
            <Text style={styles.infoAddress}>
              {dataFetch.address.address_line_one}
            </Text>
            <Text style={styles.infoDesc}>
              {dataFetch.hotel_description.substring(0, 30) + "..."}
            </Text>
          </>
        )}
      </View>
      {dataFetch && (
        <View style={styles.rate}>
          <Text style={styles.rateText}>Rate : {dataFetch.review_rating}</Text>
        </View>
      )}
    </View>
  );
};

export default BookingHistoryItems;
