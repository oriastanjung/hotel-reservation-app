import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAccountData } from "../../store/reducer/profileSlice/profileSlice";

const useProfilePage = (navigation) => {
  const { firstName, lastName, email } = useSelector((state) => state.profile);
  const [firstNameState, setfirstNameState] = useState(firstName);
  const [lastNameState, setlastNameState] = useState(lastName);
  const [emailState, setemailState] = useState(email);
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
              email: emailState,
            })
          );
          navigation.navigate("Home");
        },
      },
    ]);
  };

  return {
    firstNameState,
    setfirstNameState,
    lastNameState,
    setlastNameState,
    setemailState,
    emailState,
    handleChangeAccountData,
  };
};

export default useProfilePage;
