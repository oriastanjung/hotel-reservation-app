import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import calendarIcon from "../../../assets/calendar-icon.png";
import styles from "./InputDate.styles";

const InputDate = (props) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{props.label} :</Text>
      <Pressable style={styles.dateInput} onPress={props.showDatepicker}>
        <View style={styles.datePicker}>
          <Image style={styles.iconImg} source={calendarIcon} />
          <Text style={styles.valueShow}>
            {moment(props.date).format("MMMM Do YYYY")}
          </Text>
        </View>
      </Pressable>
      {props.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          mode={props.date}
          is24Hour={true}
          onChange={props.onChange}
        />
      )}
    </View>
  );
};

export default InputDate;
