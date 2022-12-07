import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/reducer/loginSlice/loginSlice";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { getData, storeData, STORAGE_KEY } from "../../utils/asyncstorage";
const useLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { errorMessage, isSuccess, token } = useSelector(
    (state) => state.login
  );

  const [err, setErr] = useState("");
  const handleLogin = () => {
    console.log("clicked");
    if (email === "user@gmail.com" && password === "user123") {
      dispatch(login({ email: email, password: password }));
      // navigation.navigate("Home Screen Page");
    } else {
      setErr("Invalid Credentials");
    }
  };

  useEffect(() => {
    if (token) {
      navigation.navigate("Home Screen Page");
    }
  }, [token]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    err,
    isSuccess,
  };
};

export default useLoginPage;
