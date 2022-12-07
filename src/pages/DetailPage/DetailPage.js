import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageStore,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StarReview from "../../components/StarReview/StarReview";
import IconLabel from "../../components/IconLabel/IconLabel";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { images, icons, COLORS, FONTS, SIZES } from "../../consts";
import styles from "./DetailPage.styles";
import { useRoute } from "@react-navigation/native";
import useDetailPage from "./useDetailPage";

function DetailPage({ navigation }) {
  const route = useRoute();
  const { hotelid_ppn } = route.params;
  const { detail, bookingDetail, handleGoToBook } = useDetailPage(hotelid_ppn);

  return (
    <>
      {detail ? (
        <>
          <View style={styles.container}>
            {/* Header */}
            {console.log("nih id nya : ", hotelid_ppn)}
            {detail && console.log("ini  detail : ", detail)}
            <View style={{ flex: 2 }}>
              <Image
                source={{
                  uri: `https://${detail.thumbnail}`,
                }}
                style={{
                  width: 400,
                  height: 300,
                }}
              />

              <View
                style={[
                  {
                    position: "absolute",
                    bottom: "5%",
                    left: "5%",
                    right: "5%",
                    borderRadius: 15,
                    padding: SIZES.padding,
                    backgroundColor: "#fff",
                  },
                  styles.shadow,
                ]}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.shadow}>
                    <Image
                      source={{
                        uri: `https://${detail.thumbnail}`,
                      }}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 15,
                      }}
                    />
                  </View>

                  <View
                    style={{
                      marginHorizontal: 20,
                      justifyContent: "space-around",
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>{detail.name}</Text>
                    <Text
                      style={{ color: "gray" }}
                    >{`${detail.address.address_line_one}, ${detail.address.city_name}`}</Text>

                    <StarReview rate={Number(detail.star_rating)} />
                  </View>
                </View>

                <View style={{ marginTop: SIZES.radius }}>
                  <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                    The Hotel {detail.name} is located{" "}
                    {`${detail.address.address_line_one} ${detail.address.city_name} on ${detail.address.country_name}`}
                  </Text>
                </View>
              </View>

              {/* Header Buttons */}
              <View
                style={{
                  position: "absolute",
                  top: 50,
                  left: 20,
                  right: 20,
                  //height: 50,
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Home Screen Page");
                    }}
                  >
                    <Image
                      source={icons.back}
                      resizeMode="cover"
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log("Menu on pressed");
                    }}
                  >
                    <Image
                      source={icons.menu}
                      resizeMode="cover"
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Body */}
            <ScrollView style={{ flex: 1.5 }}>
              {/* Icons */}
              <View style={{ paddingHorizontal: SIZES.padding }}>
                <Text style={{ ...FONTS.h2 }}>Facilities</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: SIZES.base,
                  paddingHorizontal: SIZES.padding * 2,
                  justifyContent: "space-between",
                }}
              >
                <IconLabel icon={icons.wifi} label="Villa" />

                <IconLabel icon={icons.parking} label="Parking" />

                <IconLabel icon={icons.spa} label="Spa" />
              </View>

              {/* About */}
              <View
                style={{
                  marginTop: SIZES.padding,
                  paddingHorizontal: SIZES.padding,
                  height: 150,
                }}
              >
                <Text style={{ ...FONTS.h2 }}>About</Text>
                <View>
                  <Text
                    style={{
                      marginTop: SIZES.radius,
                      color: COLORS.gray,
                      ...FONTS.body3,
                    }}
                  >
                    {detail.hotel_description}
                  </Text>
                </View>
              </View>
            </ScrollView>

            {/* Footer */}
            <View
              style={{
                flex: 0.5,
                paddingHorizontal: SIZES.padding,
                marginBottom: 40,
                marginTop: 25,
              }}
            >
              <LinearGradient
                style={[{ height: 70, width: "100%", borderRadius: 15 }]}
                colors={["#edf0fc", "#d6dfff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      marginHorizontal: SIZES.padding,
                      justifyContent: "center",
                    }}
                  >
                    {bookingDetail && (
                      <Text style={{ ...FONTS.h1 }}>
                        {bookingDetail.ratesSummary.minPrice
                          ? `$${bookingDetail.ratesSummary.minPrice}`
                          : bookingDetail.ratesSummary.status}
                      </Text>
                    )}
                  </View>
                  {bookingDetail && (
                    <TouchableOpacity
                      style={{
                        width: 130,
                        height: "80%",
                        marginHorizontal: SIZES.radius,
                      }}
                      onPress={
                        bookingDetail.ratesSummary.status !== "UNAVAILABLE"
                          ? handleGoToBook
                          : () => console.log("not available")
                      }
                    >
                      <LinearGradient
                        style={[
                          {
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 10,
                          },
                        ]}
                        colors={["#7FE9DE", "#FF3CBD"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                      >
                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                          BOOKING
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  )}
                </View>
              </LinearGradient>
            </View>
          </View>
        </>
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50%",
          }}
        >
          <Text>Data Currently Not Available </Text>
        </View>
      )}

      <BottomNavbar />
    </>
  );
}

export default DetailPage;
