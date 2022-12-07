import { View, Text, ScrollView, Alert } from "react-native";
import React from "react";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import InputDate from "../../components/InputDate/InputDate";
import useBookingPage from "./useBookingPage";
import BookingSummaryCard from "../../components/BookingSummaryCard/BookingSummaryCard";
import ButtonComponent from "../../components/Button/Button";
import styles from "./BookingPage.styles";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { useRoute } from "@react-navigation/native";
const BookingPage = ({ navigation }) => {
  const {
    endDate,
    startDate,
    onChangeEndDate,
    onChangeStartDate,
    mode,
    showEnd,
    showStart,
    pressed,
    setPressed,
    fullname,
    showDatepickerEnd,
    showDatepickerStart,
    phone,
    room,
    people,
    setfullname,
    setpeople,
    setphone,
    setroom,
    days,
    handleAddToBookingHistory,
  } = useBookingPage();
  const route = useRoute();
  const { hotelid_ppn, price, rooms, hotelData } = route.params;
  console.log("hotel_data : ", hotelData);
  const CheckoutHandler = () => {
    Alert.alert(
      "Checkout Now?",
      `You will be book hotel of ${
        hotelData.name
      } for ${days} days with Total Price $${price * days}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Canceled"),
          style: "cancel",
        },
        {
          text: "Checkout Now",
          onPress: () => {
            handleAddToBookingHistory(hotelData);
          },
        },
      ]
    );
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.textTitle}>Contact Information</Text>
          <InputWithLabel
            label={"Fullname"}
            placeholder={"Input your fullname"}
            value={fullname}
            onChangeText={setfullname}
          />
          <InputWithLabel label={"Email"} placeholder={"Input your Email"} />
          <InputWithLabel
            label={"Phone Number"}
            placeholder={"Input your Phone Number"}
            type={"numeric"}
            value={phone}
            onChangeText={setphone}
          />
          {/* <InputWithLabel
          label={"Room"}
          placeholder={"Input how much room will be use"}
          type={"numeric"}
          value={room}
          onChangeText={setroom}
        /> */}
          <InputWithLabel
            label={"People"}
            placeholder={"Input how many people that will come"}
            type={"numeric"}
            value={people}
            onChangeText={setpeople}
          />
          <InputDate
            label={"Start Date"}
            date={startDate}
            mode={mode}
            show={showStart}
            onChange={onChangeStartDate}
            showDatepicker={showDatepickerStart}
          />

          <InputDate
            label={"End Date"}
            date={endDate}
            mode={mode}
            show={showEnd}
            onChange={onChangeEndDate}
            showDatepicker={showDatepickerEnd}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.textTitle}>Price Summary</Text>
          <View style={styles.bookingSummary}>
            <BookingSummaryCard
              days={days}
              guest={people}
              room={rooms}
              fullname={fullname}
              phone={phone}
              price={price}
            />
          </View>
          <ButtonComponent
            text={"Checkout"}
            isPrimary
            onPress={CheckoutHandler}
          />
        </View>
      </ScrollView>
      <BottomNavbar />
    </>
  );
};

export default BookingPage;
