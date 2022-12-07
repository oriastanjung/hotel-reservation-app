import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { X_RapidAPI_Host, X_RapidAPI_Key } from "../../consts/apiKey";
import { useNavigation } from "@react-navigation/native";
const useDetailPage = (idHotel) => {
  const [detail, setDetail] = useState("");
  const [bookingDetail, setBookingDetail] = useState();
  const navigation = useNavigation();
  const handleGoToBook = () => {
    navigation.navigate("Booking Page", {
      hotelid_ppn: detail.id,
      hotelData: detail,
      price: bookingDetail.ratesSummary.minPrice,
      rooms: bookingDetail.rooms ? bookingDetail.rooms.length : 3,
    });
  };
  useEffect(() => {
    async function fetchDetail(id) {
      try {
        const res = await axios({
          method: "GET",
          url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/details",
          params: {
            hotel_id: id,
            id_lookup: "true",
            plugins: "true",
            videos: "true",
            recent: "true",
            photos: "1",
            nearby: "true",
            important_info: "true",
            guest_score_breakdown: "true",
            reviews: "1",
            promo: "true",
          },
          headers: {
            "X-RapidAPI-Key": X_RapidAPI_Key,
            "X-RapidAPI-Host": X_RapidAPI_Host,
          },
        });

        setDetail(res.data.getHotelHotelDetails.results.hotel_data.hotel_0);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDetail(idHotel);
  }, []);
  useEffect(() => {
    async function fetchBookingDetail(id) {
      try {
        const dateNow = new Date();
        const dateTomorrow = new Date();
        dateTomorrow.setDate(dateTomorrow.getDate() + 1);
        const date = dateNow.getDate();
        const month = dateNow.getMonth() + 1;
        const year = dateNow.getFullYear();
        const checkout = `${dateTomorrow.getFullYear()}-${
          dateTomorrow.getMonth() + 1
        }-${dateTomorrow.getDate()}`;
        const checkin = `${year}-${month}-${date}`;
        console.log("checkout >> ", checkout);
        console.log("checkin >> ", checkin);
        const res = await axios({
          method: "GET",
          url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/booking-details",
          params: {
            date_checkout: checkout,
            date_checkin: checkin,
            hotel_id: id,
            rooms_number: "1",
          },
          headers: {
            "X-RapidAPI-Key": X_RapidAPI_Key,
            "X-RapidAPI-Host": X_RapidAPI_Host,
          },
        });
        setBookingDetail(res.data);
        console.log("ini res book : ", res.data);
      } catch (err) {
        console.log(err);
      }
    }

    if (detail.id_t) {
      fetchBookingDetail(detail.id_t);
    } else if (detail.id_r) {
      fetchBookingDetail(detail.id_r);
    } else if (detail.id_b) {
      fetchBookingDetail(detail.id_b);
    } else if (detail.id_a) {
      fetchBookingDetail(detail.id_a);
    } else if (detail.id) {
      fetchBookingDetail(detail.id);
    } else {
      setBookingDetail({
        ratesSummary: {
          minPrice: `${Math.floor(Math.random() * (300 - 70 + 1) + 70)}`,
        },
      });
    }
  }, [detail]);
  return { detail, bookingDetail, handleGoToBook };
};

export default useDetailPage;
