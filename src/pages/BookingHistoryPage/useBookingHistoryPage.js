import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import {
  resetProfile,
  setName,
} from "../../store/reducer/profileSlice/profileSlice";

const useBookingHistoryPage = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email } = useSelector((state) => state.profile);
  const name = `${firstName} ${lastName}`;
  // const dummyData = [
  //   {
  //     hotelid_ppn: "700031051",
  //     hotel_name: "Warwick New York",
  //     star_rating: 4.5,
  //     review_rating_desc: "Good",
  //     thumbnail:
  //       "//mobileimg.priceline.com/htlimg/42/42692/thumbnail-300-square.jpg",
  //     property_description:
  //       "A historic hotel in midtown Manhattan, located 483 metres from Central Park, Warwick New York offers 2 restaurants, a fitness centre and concierge services. Express check-out services are also available. All accommodations feature marble bathrooms, desks with international plug-ins, flat-screen TVs and fully stocked minibar. Mural’s on 54th, the onsite restaurant, was named after Dean Cornwell who painted the murals on the walls of the restaurant. The Warwick is also home to Randolph’s Bar and Lounge, a traditional American bistro-style restaurant. The Museum of Modern Art is 162 metres away while Fifth Avenue and Radio City Music Hall are 350 metres from the property. Rockefeller Centre is 483 metres from the property.",
  //   },
  //   {
  //     hotelid_ppn: "700031051",
  //     hotel_name: "Warwick Indonesia",
  //     star_rating: 4.5,
  //     review_rating_desc: "Good",
  //     thumbnail:
  //       "//mobileimg.priceline.com/htlimg/42/42692/thumbnail-300-square.jpg",
  //     property_description:
  //       "A historic hotel in midtown Manhattan, located 483 metres from Central Park, Warwick New York offers 2 restaurants, a fitness centre and concierge services. Express check-out services are also available. All accommodations feature marble bathrooms, desks with international plug-ins, flat-screen TVs and fully stocked minibar. Mural’s on 54th, the onsite restaurant, was named after Dean Cornwell who painted the murals on the walls of the restaurant. The Warwick is also home to Randolph’s Bar and Lounge, a traditional American bistro-style restaurant. The Museum of Modern Art is 162 metres away while Fifth Avenue and Radio City Music Hall are 350 metres from the property. Rockefeller Centre is 483 metres from the property.",
  //   },
  //   {
  //     hotelid_ppn: "700031051",
  //     hotel_name: "Warwick Indonesia",
  //     star_rating: 4.5,
  //     review_rating_desc: "Good",
  //     thumbnail:
  //       "//mobileimg.priceline.com/htlimg/42/42692/thumbnail-300-square.jpg",
  //     property_description:
  //       "A historic hotel in midtown Manhattan, located 483 metres from Central Park, Warwick New York offers 2 restaurants, a fitness centre and concierge services. Express check-out services are also available. All accommodations feature marble bathrooms, desks with international plug-ins, flat-screen TVs and fully stocked minibar. Mural’s on 54th, the onsite restaurant, was named after Dean Cornwell who painted the murals on the walls of the restaurant. The Warwick is also home to Randolph’s Bar and Lounge, a traditional American bistro-style restaurant. The Museum of Modern Art is 162 metres away while Fifth Avenue and Radio City Music Hall are 350 metres from the property. Rockefeller Centre is 483 metres from the property.",
  //   },
  //   {
  //     hotelid_ppn: "700031051",
  //     hotel_name: "Warwick Indonesia",
  //     star_rating: 4.5,
  //     review_rating_desc: "Good",
  //     thumbnail:
  //       "//mobileimg.priceline.com/htlimg/42/42692/thumbnail-300-square.jpg",
  //     property_description:
  //       "A historic hotel in midtown Manhattan, located 483 metres from Central Park, Warwick New York offers 2 restaurants, a fitness centre and concierge services. Express check-out services are also available. All accommodations feature marble bathrooms, desks with international plug-ins, flat-screen TVs and fully stocked minibar. Mural’s on 54th, the onsite restaurant, was named after Dean Cornwell who painted the murals on the walls of the restaurant. The Warwick is also home to Randolph’s Bar and Lounge, a traditional American bistro-style restaurant. The Museum of Modern Art is 162 metres away while Fifth Avenue and Radio City Music Hall are 350 metres from the property. Rockefeller Centre is 483 metres from the property.",
  //   },
  //   {
  //     hotelid_ppn: "700031051",
  //     hotel_name: "Warwick Indonesia",
  //     star_rating: 4.5,
  //     review_rating_desc: "Good",
  //     thumbnail:
  //       "//mobileimg.priceline.com/htlimg/42/42692/thumbnail-300-square.jpg",
  //     property_description:
  //       "A historic hotel in midtown Manhattan, located 483 metres from Central Park, Warwick New York offers 2 restaurants, a fitness centre and concierge services. Express check-out services are also available. All accommodations feature marble bathrooms, desks with international plug-ins, flat-screen TVs and fully stocked minibar. Mural’s on 54th, the onsite restaurant, was named after Dean Cornwell who painted the murals on the walls of the restaurant. The Warwick is also home to Randolph’s Bar and Lounge, a traditional American bistro-style restaurant. The Museum of Modern Art is 162 metres away while Fifth Avenue and Radio City Music Hall are 350 metres from the property. Rockefeller Centre is 483 metres from the property.",
  //   },
  //   {
  //     hotelid_ppn: "700031051",
  //     hotel_name: "Warwick Indonesia",
  //     star_rating: 4.5,
  //     review_rating_desc: "Good",
  //     thumbnail:
  //       "//mobileimg.priceline.com/htlimg/42/42692/thumbnail-300-square.jpg",
  //     property_description:
  //       "A historic hotel in midtown Manhattan, located 483 metres from Central Park, Warwick New York offers 2 restaurants, a fitness centre and concierge services. Express check-out services are also available. All accommodations feature marble bathrooms, desks with international plug-ins, flat-screen TVs and fully stocked minibar. Mural’s on 54th, the onsite restaurant, was named after Dean Cornwell who painted the murals on the walls of the restaurant. The Warwick is also home to Randolph’s Bar and Lounge, a traditional American bistro-style restaurant. The Museum of Modern Art is 162 metres away while Fifth Avenue and Radio City Music Hall are 350 metres from the property. Rockefeller Centre is 483 metres from the property.",
  //   },
  // ];
  const { data } = useSelector((state) => state.bookingHistory);

  useEffect(() => {
    //   dispatch(resetProfile());
    // dispatch(
    //   setName({
    //     firstName: "Orias",
    //     lastName: "Tanjung",
    //     email: "oriastanjung@gmail.com",
    //   })
    // );
  }, []);
  return { name, email, data };
};

export default useBookingHistoryPage;
