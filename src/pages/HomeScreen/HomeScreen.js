import {
  View,
  Text,
  SafeAreaView,
  Animated,
  FlatList,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import useHomeScreen from "./useHomeScreen";
import TopHotelCard from "../../components/TopHotelCard/TopHotelCard";
import Card from "../../components/Card/Card";
import ButtonComponent from "../../components/Button/Button";
import colors from "../../consts/color";
// import hotels from "../../consts/hotels";
import { Ionicons } from "@expo/vector-icons";
import styles from "./HomeScreen.styles";
import InputDate from "../../components/InputDate/InputDate";
import { useNavigation } from "@react-navigation/native";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";

const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;

const HomeScreen = () => {
  const navigation = useNavigation();
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const {
    endDate,
    startDate,
    onChangeEndDate,
    onChangeStartDate,
    mode,
    showEnd,
    showStart,
    pressed,
    people,
    setpeople,
    setPressed,
    showDatepickerEnd,
    showDatepickerStart,
    hotels,
    popular,
    location,
    setLocation,
    handleToSearch,
  } = useHomeScreen();

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: 15, marginBottom: 40 }}>
        <View style={styles.header}>
          <View style={{ paddingBottom: 15 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Find Your Hotel In
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: colors.primary,
                }}
              >
                Indonesia
              </Text>
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.searcInput}>
            <Ionicons name="search" size={30} style={{ marginLeft: 20 }} />
            <TextInput
              placeholder="Where Do You Want To go ?"
              style={{ fontSize: 20, paddingLeft: 10 }}
              value={location}
              onChangeText={setLocation}
            />
          </View>

          <InputDate
            label={"Check In"}
            date={startDate}
            mode={mode}
            show={showStart}
            onChange={onChangeStartDate}
            showDatepicker={showDatepickerStart}
          />

          <InputDate
            label={"Check Out"}
            date={endDate}
            mode={mode}
            show={showEnd}
            onChange={onChangeEndDate}
            showDatepicker={showDatepickerEnd}
          />

          <View style={styles.guestInput}>
            <Ionicons name="person-outline" style={{ margin: 20 }} size={30} />
            <TextInput
              placeholder="Guest ?"
              style={{ fontSize: 18, paddingLeft: 10 }}
              value={people}
              onChangeText={setpeople}
            />
            {/* <Ionicons name="arrow-up" style={{ margin:10 }} size={30}/>
            <Ionicons name="arrow-down" style={{ margin:10 }} size={30}/> */}
          </View>

          <View style={{ marginVertical: 15, marginHorizontal: 20 }}>
            <ButtonComponent
              text={"Search"}
              isPrimary
              onPress={handleToSearch}
            />
          </View>

          <View>
            <Text
              style={{
                fontWeight: "bold",
                color: colors.grey,
                fontSize: 30,
                paddingHorizontal: 20,
              }}
            >
              Hotels In Indonesia
            </Text>
            {hotels && (
              <Animated.FlatList
                onMomentumScrollEnd={(e) => {
                  setActiveCardIndex(
                    Math.round(e.nativeEvent.contentOffset.x / cardWidth)
                  );
                }}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: true }
                )}
                horizontal
                data={hotels}
                contentContainerStyle={{
                  paddingVertical: 30,
                  paddingLeft: 20,
                  paddingRight: cardWidth / 2 - 40,
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <Card
                    onPress={() =>
                      navigation.navigate("Details", {
                        hotelid_ppn: item.hotelid_ppn,
                      })
                    }
                    hotel={item}
                    index={index}
                    activeCardIndex={activeCardIndex}
                    scrollX={scrollX}
                  />
                )}
                snapToInterval={cardWidth}
              />
            )}
          </View>

          <View>
            <Text
              style={{
                fontWeight: "bold",
                color: colors.grey,
                fontSize: 30,
                paddingHorizontal: 20,
              }}
            >
              Popular Destinations
            </Text>
            {popular && console.log("popular >> ", popular)}
            {popular && (
              <FlatList
                data={popular}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingLeft: 20,
                  marginTop: 20,
                  paddingBottom: 30,
                }}
                renderItem={({ item }) => <TopHotelCard hotel={item} />}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomNavbar />
    </>
  );
};

export default HomeScreen;
