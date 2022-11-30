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
import hotels from "../../consts/hotels";
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
    setPressed,
    showDatepickerEnd,
    showDatepickerStart,
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
            />
            {/* <Ionicons name="arrow-up" style={{ margin:10 }} size={30}/>
            <Ionicons name="arrow-down" style={{ margin:10 }} size={30}/> */}
          </View>

          <View style={{ marginVertical: 15, marginHorizontal: 20 }}>
            <ButtonComponent
              text={"Search"}
              isPrimary
              onPress={() => navigation.navigate("Search Screen Page")}
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
              City In Indonesia
            </Text>
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
                  onPress={() => navigation.navigate("Details")}
                  hotel={item}
                  index={index}
                  activeCardIndex={activeCardIndex}
                  scrollX={scrollX}
                />
              )}
              snapToInterval={cardWidth}
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
              Popular Destinations
            </Text>

            <FlatList
              data={hotels}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingLeft: 20,
                marginTop: 20,
                paddingBottom: 30,
              }}
              renderItem={({ item }) => (
                <TopHotelCard
                  hotel={item}
                  onPress={() => navigation.navigate("Details")}
                />
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomNavbar />
    </>
  );
};

export default HomeScreen;
