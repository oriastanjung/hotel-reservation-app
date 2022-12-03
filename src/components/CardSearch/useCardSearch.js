import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { X_RapidAPI_Key, X_RapidAPI_Host } from "../../consts/apiKey";
import axios from "axios";
const useCardSearch = ({ data, checkin, checkout }) => {
  const [price, setPrice] = useState(0);
  const dateNow = new Date(checkin);
  const dateTomorrow = new Date(checkout);
  console.log("CHECKIN >>> ", dateNow);
  console.log("CHECKOUT >>> ", dateTomorrow);
  async function fetchBookingDetail(id) {
    try {
      // dateTomorrow.setDate(dateTomorrow.getDate() + 1);
      const date = dateNow.getDate();
      const month = dateNow.getMonth() + 1;
      const year = dateNow.getFullYear();
      const checkout = `${dateTomorrow.getFullYear()}-${
        dateTomorrow.getMonth() + 1
      }-${dateTomorrow.getDate()}`;
      const checkin = `${year}-${month}-${date}`;
      console.log("wiw");
      console.log("checkout >> ", checkout);
      console.log("checkin >> ", checkin);
      const res = await axios({
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/booking-details",
        params: {
          date_checkout: `${checkout}`,
          date_checkin: `${checkin}`,
          hotel_id: `${id}`,
          rooms_number: "1",
        },
        headers: {
          "X-RapidAPI-Key": `${X_RapidAPI_Key}`,
          "X-RapidAPI-Host": `${X_RapidAPI_Host}`,
        },
      });

      console.log("res search price >>", res.data);
      setPrice(res.data.ratesSummary.minPrice);
      console.log("ini res book : ", res.data);
    } catch (err) {
      setPrice(`${Math.floor(Math.random() * (300 - 70 + 1) + 70)}`);
    }
  }
  useEffect(() => {
    console.log("data >> ", data);
    // fetchBookingDetail(data.hotelid_ppn);
    if (data.hotelid_t) {
      console.log("data >> ", data);
      fetchBookingDetail(data.hotelid_t);
    } else if (data.hotelid_r) {
      fetchBookingDetail(data.hotelid_r);
    } else if (data.hotelid_b) {
      fetchBookingDetail(data.hotelid_b);
    } else if (data.hotelid_a) {
      fetchBookingDetail(data.hotelid_a);
    } else if (data.hotelid) {
      fetchBookingDetail(data.hotelid);
    } else if (data.hotelid_ppn) {
      console.log("hotel id >>> ", data.hotelid_ppn);
      fetchBookingDetail(data.hotelid_ppn);
    } else {
      console.log("yah ga ad price mah");
      setPrice(`${Math.floor(Math.random() * (300 - 70 + 1) + 70)}`);
    }
  }, []);

  const handleSearchAgain = async (idInput, checkinTime, checkoutTime) => {};
  return { price, handleSearchAgain };
};

export default useCardSearch;
