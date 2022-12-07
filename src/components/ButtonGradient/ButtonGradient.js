import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./ButtonGradient.styles";
export default function ButtonGradient(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <LinearGradient
        colors={["#7FE9DE", "#FF3CBD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.text}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
