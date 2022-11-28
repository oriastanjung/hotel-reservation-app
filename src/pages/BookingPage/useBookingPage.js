import React, { useState } from "react";

const useBookingPage = () => {
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
  const days = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

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
  };
};

export default useBookingPage;
