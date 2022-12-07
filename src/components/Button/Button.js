import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import styles from "./Button.styles";

const Button = (props) => {
  let styleCondition = { ...styles.btn };
  let styleText = { ...styles.text };
  if (props.isPrimary) {
    styleCondition = { ...styleCondition, ...styles.primary };
  }
  if (props.isSecondary) {
    styleCondition = { ...styleCondition, ...styles.secondary };
  }
  if (props.isWarning) {
    styleCondition = {
      ...styleCondition,
      ...styles.warning,
    };
    styleText = { ...styleText, ...styles.textWarning };
  }
  return (
    <Pressable style={styleCondition} onPress={props.onPress}>
      <Text style={styleText}>{props.text}</Text>
    </Pressable>
  );
};

export default Button;
