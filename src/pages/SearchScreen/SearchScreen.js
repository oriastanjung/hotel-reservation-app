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
const SearchScreen = ({ navigation, route }) => {
  const item = route.params;
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
  } = useSearchScreen();
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors.white,
        paddingBottom: 50,
        paddingTop: 25,
      }}
    >
      <View style={style.searcInput}>
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

      <View style={style.guestInput}>
        <Ionicons name="person-outline" style={{ margin: 20 }} size={30} />
        <TextInput
          placeholder="Guest ?"
          style={{ fontSize: 18, paddingLeft: 10 }}
        />
        {/* <Ionicons name="arrow-up" style={{ margin:10 }} size={30}/>
        <Ionicons name="arrow-down" style={{ margin:10 }} size={30}/> */}
      </View>
      <ImageBackground
        style={style.headerImage}
        // source={item.image}
      >
        <View style={style.header}>
          <Ionicons
            name="arrow-back"
            size={28}
            color={colors.primary}
            onPress={navigation.goBack}
          />
          <Ionicons name="heart-circle" size={28} color={colors.primary} />
        </View>
      </ImageBackground>

      <View>
        <View style={style.iconContainer}>
          <MaterialIcons name="place" color={colors.white} size={28} />
        </View>

        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {/* {item.name} */}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: colors.grey,
              marginTop: 5,
            }}
          >
            {/* {item.location} */}
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons name="star" size={20} color={colors.orange} />
                <MaterialIcons name="star" size={20} color={colors.orange} />
                <MaterialIcons name="star" size={20} color={colors.orange} />
                <MaterialIcons name="star" size={20} color={colors.orange} />
                <MaterialIcons name="star" size={20} color={colors.grey} />
              </View>
              <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 5 }}>
                4.0
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Price Per Night
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: colors.grey,
                marginLeft: 5,
              }}
            >
              {/* $ {item.price} */}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
