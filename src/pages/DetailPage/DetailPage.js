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
function DetailPage({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      // marginBottom: 40,
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.35,
      shadowRadius: 3.84,

      elevation: 5,
    },
  });

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <View style={{ flex: 2 }}>
          <Image
            source={{
              uri: "https://i0.wp.com/bersamawisata.com/wp-content/uploads/2021/07/488600_18071812270066954646.jpg?fit=1024%2C768&ssl=1",
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
                    uri: "https://i0.wp.com/bersamawisata.com/wp-content/uploads/2021/07/488600_18071812270066954646.jpg?fit=1024%2C768&ssl=1",
                  }}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 15,
                  }}
                />
              </View>

              <View
                style={{ marginHorizontal: 20, justifyContent: "space-around" }}
              >
                <Text style={{ fontWeight: "bold" }}>Rose Garden Hotel</Text>
                <Text style={{ color: "gray" }}>San Bruno, California</Text>

                <StarReview rate={4.5} />
              </View>
            </View>

            <View style={{ marginTop: SIZES.radius }}>
              <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                The Hotel Rose Garden is San Jose's newest independent hotel
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem omnis numquam excepturi impedit quaerat hic eveniet
                porro, officia et modi nesciunt, laudantium odio, totam laborum.
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
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  flex: 1,
                  marginHorizontal: SIZES.padding,
                  justifyContent: "center",
                }}
              >
                <Text style={{ ...FONTS.h1 }}>$1000</Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 130,
                  height: "80%",
                  marginHorizontal: SIZES.radius,
                }}
                onPress={() => {
                  navigation.navigate("Booking Page");
                }}
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
            </View>
          </LinearGradient>
        </View>
      </View>
      <BottomNavbar />
    </>
  );
}

export default DetailPage;
