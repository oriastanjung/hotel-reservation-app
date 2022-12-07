import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHotelsIndonesia,
  fetchHotelsPopular,
} from "../../store/reducer/hotelsSlice/hotelsSlice";

import { useNavigation } from "@react-navigation/native";
const useHomeScreen = () => {
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [pressed, setPressed] = useState(false);
  const [fullname, setfullname] = useState("");
  const [phone, setphone] = useState(0);
  const [room, setroom] = useState(3);
  const [people, setpeople] = useState(0);
  const [location, setLocation] = useState("");
  const days = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  const navigation = useNavigation();
  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowStart(false);
    setStartDate(currentDate);
  };

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowEnd(false);
    setEndDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    setShow(true);
  };
  const showDatepickerStart = () => {
    showMode("date");
    setShowStart(true);
  };
  const showDatepickerEnd = () => {
    showMode("date");
    setShowEnd(true);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const dispatch = useDispatch();
  const { hotelsIndonesia, hotelsPopular } = useSelector(
    (state) => state.hotels
  );
  // const hotels = Object.values(hotelsIndonesia);
  // const [hotels, setHotels] = useState([]);
  const hotels = hotelsIndonesia;
  // const popular = hotelsPopular.filter((item) => item.star_rating >= 4);
  const popular = hotelsIndonesia.filter((item) => item.star_rating >= 4);
  // const popular = hotelsIndonesia;
  useEffect(() => {
    dispatch(fetchHotelsIndonesia());
    // console.log(hotel);
    // Object.keys(hotel).forEach(function (key, index) {});
  }, []);

  // useEffect(() => {
  //   dispatch(fetchHotelsPopular());
  // }, []);
  const handleToSearch = () => {
    console.log("start date >> ", startDate.toLocaleString());
    console.log("end date >> ", endDate.toLocaleString());
    navigation.navigate("Search Screen Page", {
      checkin: startDate,
      checkout: endDate,
      query: location,
    });
  };
  return {
    startDate,
    endDate,
    onChangeEndDate,
    onChangeStartDate,
    showDatepicker,
    showTimepicker,
    mode,
    show,
    showStart,
    showEnd,
    showDatepickerEnd,
    showDatepickerStart,
    pressed,
    setPressed,
    fullname,
    setfullname,
    setpeople,
    setphone,
    setroom,
    phone,
    room,
    people,
    days,
    hotels,
    popular,
    location,
    setLocation,
    handleToSearch,
  };
};

export default useHomeScreen;
