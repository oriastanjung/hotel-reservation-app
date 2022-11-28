import { View, Text, StyleSheet } from "react-native";
import React from "react";
import styles from "./BookingSummary.styles";

const BookingSummaryCard = (props) => {
  const name =
    props.fullname.length > 25
      ? props.fullname?.substring(0, 25) + "..."
      : props.fullname;
  const phone =
    props.phone.length > 14
      ? props.phone?.substring(0, 14) + "..."
      : props.phone;

  return (
    <View style={styles.card}>
      <Text style={styles.summary}>
        {props.days} Days, {props.room} Room, {props.guest} Guest
      </Text>
      <Text style={styles.profile}>
        {props.fullname && `${name} - ${phone}`}
      </Text>
      <View style={styles.total}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.price}>$ {props.price * props.days}</Text>
      </View>
    </View>
  );
};

export default BookingSummaryCard;
