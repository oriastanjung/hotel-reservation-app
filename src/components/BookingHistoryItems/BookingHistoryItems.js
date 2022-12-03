import axios from "axios";
import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./BookingHistoryItems.styles";
import useBookingHistoryItems from "./useBookingHistoryItems";
const BookingHistoryItems = (props) => {
  // const { dataFetch } = useBookingHistoryItems(props.data.hotelid_ppn);
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={{ uri: `https:${props.data.thumbnail}` }}
      />
      <View style={styles.info}>
        <Text style={styles.infoTitle}>{props.data.name}</Text>
        {props.data && (
          <>
            <Text style={styles.infoAddress}>
              {props.data.address.address_line_one}
            </Text>
            <Text style={styles.infoDesc}>
              {props.data.hotel_description.substring(0, 30) + "..."}
            </Text>
          </>
        )}
      </View>
      {props.data && (
        <View style={styles.rate}>
          <Text style={styles.rateText}>Rate : {props.data.review_rating}</Text>
        </View>
      )}
    </View>
  );
};

export default BookingHistoryItems;
