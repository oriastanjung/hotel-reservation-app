import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import styles from "./Button.styles";

const Button = (props) => {
  let styleCondition = { ...styles.btn };
  if (props.isPrimary) {
    styleCondition = { ...styleCondition, ...styles.primary };
  }
  if (props.isSecondary) {
    styleCondition = { ...styleCondition, ...styles.secondary };
  }
  return (
    <Pressable style={styleCondition} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
};

export default Button;
