import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { X_RapidAPI_Host, X_RapidAPI_Key } from "../../../consts/apiKey";
const initialState = {
  hotelsIndonesia: [],
  // hotelsPopular: [],
  hotelSearch: [],
};

export const fetchHotelsIndonesia = createAsyncThunk(
  "hotels/fetchHotelsIndonesia",
  async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest",
        params: { string: "Indonesia", get_hotels: "true" },
        headers: {
          "X-RapidAPI-Key": X_RapidAPI_Key,
          "X-RapidAPI-Host": X_RapidAPI_Host,
        },
      });
      const res1 = await axios({
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest",
        params: { string: "Jakarta", get_hotels: "true" },
        headers: {
          "X-RapidAPI-Key": X_RapidAPI_Key,
          "X-RapidAPI-Host": X_RapidAPI_Host,
        },
      });
      const res2 = await axios({
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest",
        params: { string: "Jogja", get_hotels: "true" },
        headers: {
          "X-RapidAPI-Key": X_RapidAPI_Key,
          "X-RapidAPI-Host": X_RapidAPI_Host,
        },
      });
      const res3 = await axios({
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest",
        params: { string: "Bali", get_hotels: "true" },
        headers: {
          "X-RapidAPI-Key": X_RapidAPI_Key,
          "X-RapidAPI-Host": X_RapidAPI_Host,
        },
      });
      const res4 = await axios({
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest",
        params: { string: "Bandung", get_hotels: "true" },
        headers: {
          "X-RapidAPI-Key": X_RapidAPI_Key,
          "X-RapidAPI-Host": X_RapidAPI_Host,
        },
      });
      const data = res.data.getHotelAutoSuggestV2.results.result.hotels;
      const data1 = res1.data.getHotelAutoSuggestV2.results.result.hotels;
      const data2 = res2.data.getHotelAutoSuggestV2.results.result.hotels;
      const data3 = res3.data.getHotelAutoSuggestV2.results.result.hotels;
      const data4 = res4.data.getHotelAutoSuggestV2.results.result.hotels;
      console.log("data >>> ", data);
      console.log("data1 >>> ", data1);
      console.log("data2 >>> ", data2);
      console.log("data3 >>> ", data3);
      console.log("data4 >>> ", data4);

      return [
        ...Object.values(data),
        ...Object.values(data1),
        ...Object.values(data2),
        ...Object.values(data3),
        ...Object.values(data4),
      ];
    } catch (error) {
      console.log(error);
    }
  }
);
// export const fetchHotelsPopular = createAsyncThunk(
//   "hotels/fetchHotelsPopular",
//   async () => {
//     try {
//       const res = await axios({
//         method: "GET",
//         url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest",
//         params: { string: "Indonesia", get_hotels: "true" },
//         headers: {
//           "X-RapidAPI-Key": X_RapidAPI_Key,
//           "X-RapidAPI-Host": X_RapidAPI_Host,
//         },
//       });
//       // const res1 = await axios({
//       //   method: "GET",
//       //   url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest",
//       //   params: { string: "Jakarta", get_hotels: "true" },
//       //   headers: {
//       //     "X-RapidAPI-Key": X_RapidAPI_Key,
//       //     "X-RapidAPI-Host": X_RapidAPI_Host,
//       //   },
//       // });
//       // const res2 = await axios({
//       //   method: "GET",
//       //   url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest",
//       //   params: { string: "Jogja", get_hotels: "true" },
//       //   headers: {
//       //     "X-RapidAPI-Key": X_RapidAPI_Key,
//       //     "X-RapidAPI-Host": X_RapidAPI_Host,
//       //   },
//       // });
//       // const res3 = await axios({
//       //   method: "GET",
//       //   url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest",
//       //   params: { string: "Bali", get_hotels: "true" },
//       //   headers: {
//       //     "X-RapidAPI-Key": X_RapidAPI_Key,
//       //     "X-RapidAPI-Host": X_RapidAPI_Host,
//       //   },
//       // });
//       // const res4 = await axios({
//       //   method: "GET",
//       //   url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest",
//       //   params: { string: "Bandung", get_hotels: "true" },
//       //   headers: {
//       //     "X-RapidAPI-Key": X_RapidAPI_Key,
//       //     "X-RapidAPI-Host": X_RapidAPI_Host,
//       //   },
//       // });
//       const data = res.data.getHotelAutoSuggestV2.results.result.hotels;
//       // const data1 = res1.data.getHotelAutoSuggestV2.results.result.hotels;
//       // const data2 = res2.data.getHotelAutoSuggestV2.results.result.hotels;
//       // const data3 = res3.data.getHotelAutoSuggestV2.results.result.hotels;
//       // const data4 = res4.data.getHotelAutoSuggestV2.results.result.hotels;
//       console.log("data popular >>> ", data);
//       // console.log("data1 popular >>> ", data1);
//       // console.log("data2 popular >>> ", data2);
//       // console.log("data3 popular >>> ", data3);
//       // console.log("data4 popular >>> ", data4);

//       return [
//         ...Object.values(data),
//         // ...Object.values(data1),
//         // ...Object.values(data2),
//         // ...Object.values(data3),
//         // ...Object.values(data4),
//       ];
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
export const fetchHotelSearch = createAsyncThunk(
  "hotels/fetchHotelSearch",
  async ({ query, checkin, checkout }) => {
    try {
      console.log("query >>> ", query);
      console.log("checkin >>> ", checkin);
      console.log("checkout >>> ", checkout);
      const res = await axios({
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest",
        params: { string: `${query}`, get_hotels: "true" },
        headers: {
          "X-RapidAPI-Key": X_RapidAPI_Key,
          "X-RapidAPI-Host": X_RapidAPI_Host,
        },
      });

      const data = res.data.getHotelAutoSuggestV2.results.result.hotels;

      console.log("data search >>> ", data);

      return [...Object.values(data)];
    } catch (error) {
      console.log(error);
    }
  }
);
const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHotelsIndonesia.fulfilled, (state, action) => {
      console.log("payload >> ", action.payload);
      state.hotelsIndonesia = Object.values(action.payload);
    });
    // builder.addCase(fetchHotelsPopular.fulfilled, (state, action) => {
    //   console.log("payload popular >> ", action.payload);
    //   state.hotelsPopular = action.payload;
    // });
    builder.addCase(fetchHotelSearch.fulfilled, (state, action) => {
      console.log("payload hotel search >> ", action.payload);
      state.hotelSearch = action.payload;
    });
  },
});

export default hotelsSlice.reducer;
