import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from "../../consts/color";
import InputDate from "../../components/InputDate/InputDate";
import useSearchScreen from "./useSearchScreen";
import ButtonComponent from "../../components/Button/Button";
import hotels from "../../consts/hotels";
import style from "./SearchScreen.styles";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import CardSearch from "../../components/CardSearch/CardSearch";
const SearchScreen = ({ navigation, route }) => {
  const { checkin, checkout, query } = route.params;
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
    hotelSearch,
  } = useSearchScreen(route.params);
  return (
    <>
      {hotelSearch && console.log("hotel searched >>> ", hotelSearch)}
      <ScrollView
        contentContainerStyle={{
          backgroundColor: colors.white,
          flex: 1,

          // marginVertical: "30%",
        }}
        style={{ marginBottom: 45 }}
      >
        <View style={{ marginTop: "15%", marginLeft: "10%", marginBottom: 15 }}>
          <Text style={{ fontSize: 20, fontFamily: "sans-serif-medium" }}>
            Result Searched Page
          </Text>
        </View>
        {/* <View style={style.searcInput}>
          <Ionicons name="search" size={30} style={{ marginLeft: 20 }} />
          <TextInput
            placeholder="Where Do You Want To go ?"
            style={{ fontSize: 20, paddingLeft: 10 }}
          />
        </View> */}

        {/* <InputDate
          label={"Check In"}
          date={startDate}
          mode={mode}
          show={showStart}
          onChange={onChangeStartDate}
          showDatepicker={showDatepickerStart}
        /> */}

        {/* <InputDate
          label={"Check Out"}
          date={endDate}
          mode={mode}
          show={showEnd}
          onChange={onChangeEndDate}
          showDatepicker={showDatepickerEnd}
        /> */}

        {/* <View style={style.guestInput}>
          <Ionicons name="person-outline" style={{ margin: 20 }} size={30} />
          <TextInput
            placeholder="Guest ?"
            style={{ fontSize: 18, paddingLeft: 10 }}
          />
        </View> */}
        {hotelSearch && (
          <FlatList
            data={hotelSearch}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
              marginTop: 20,
              paddingBottom: 30,
            }}
            renderItem={({ item }) => (
              <CardSearch
                data={item}
                checkin={startDate.toLocaleString()}
                checkout={endDate.toLocaleString()}
                onPress={() =>
                  navigation.navigate("Details", {
                    hotelid_ppn: item.hotelid_ppn,
                  })
                }
              />
            )}
          />
        )}
        {!hotelSearch && (
          <Text style={{ textAlign: "center", marginVertical: "50%" }}>
            No Data Found
          </Text>
        )}
      </ScrollView>
      <BottomNavbar />
    </>
  );
};

export default SearchScreen;
