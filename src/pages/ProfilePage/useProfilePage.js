import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAccountData } from "../../store/reducer/profileSlice/profileSlice";
import { logout } from "../../store/reducer/loginSlice/loginSlice";
import { useNavigation } from "@react-navigation/native";
const useProfilePage = (navigation) => {
  const { firstName, lastName, phoneNumber } = useSelector(
    (state) => state.profile
  );
  const [firstNameState, setfirstNameState] = useState(firstName);
  const [lastNameState, setlastNameState] = useState(lastName);
  const [phoneNumberState, setphoneNumberState] = useState(phoneNumber);
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleChangeAccountData = () => {
    Alert.alert("Change Data?", "This will update your data profile", [
      {
        text: "Cancel",
        onPress: () => console.log("Canceled"),
        style: "cancel",
      },
      {
        text: "Update",
        onPress: () => {
          dispatch(
            changeAccountData({
              firstName: firstNameState,
              lastName: lastNameState,
              phoneNumber: phoneNumberState,
            })
          );
          navigation.navigate("Home Screen Page");
        },
      },
    ]);
  };
  const logoutHandler = () => {
    dispatch(logout());
    navigation.navigate("Login Page");
  };
  return {
    firstNameState,
    setfirstNameState,
    lastNameState,
    setlastNameState,
    setphoneNumberState,
    phoneNumberState,
    handleChangeAccountData,
    logoutHandler,
  };
};

export default useProfilePage;
