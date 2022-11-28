import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./InputWithLabel.styles";
const InputWithLabel = (props) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{props.label} : </Text>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        keyboardType={props.type}
      />
    </View>
  );
};

export default InputWithLabel;
