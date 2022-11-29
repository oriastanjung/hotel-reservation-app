import { View, Text, StyleSheet } from "react-native";
import React from "react";
import styles from "./ProfileCard.styles";
const ProfileCard = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

export default ProfileCard;
