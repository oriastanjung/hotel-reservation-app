import React, { useState, useEffect } from "react";
import axios from "axios";
const useBookingHistoryItems = (idProps) => {
  const [dataFetch, setDataFetch] = useState();

  // useEffect(() => {
  //   const fetchData = async (id) => {
  //     try {
  //       const res = await axios({
  //         method: "GET",
  //         url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/details",
  //         params: { hotel_id: `${id}` },
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "311346925emsh7602320ae752c89p135b74jsn8208a1e438f2",
  //           "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
  //         },
  //       });
  //       const response =
  //         res.data.getHotelHotelDetails.results.hotel_data.hotel_0;
  //       // console.log("response >>> ", response);
  //       // return response;
  //       setDataFetch(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData(idProps);
  // }, []);

  return {
    dataFetch,
  };
};

export default useBookingHistoryItems;
