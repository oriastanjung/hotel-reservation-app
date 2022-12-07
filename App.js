import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import Home from "./src/pages/Home/Home";
import DetailPage from "./src/pages/DetailPage/DetailPage";
import BookingPage from "./src/pages/BookingPage/BookingPage";
import BookingHistoryPage from "./src/pages/BookingHistoryPage/BookingHistoryPage";
import ProfilePage from "./src/pages/ProfilePage/ProfilePage";
import LoginPage from "./src/pages/LoginPage/LoginPage";
import HomeScreen from "./src/pages/HomeScreen/HomeScreen";
import SearchScreen from "./src/pages/SearchScreen/SearchScreen";
// import BottomNavbar from "./src/components/BottomNavbar/BottomNavbar";
const Stack = createNativeStackNavigator();
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"Login Page"}>
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen
              name="Login Page"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Details"
              component={DetailPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Booking Page" component={BookingPage} />
            <Stack.Screen
              name="Booking History Page"
              component={BookingHistoryPage}
            />
            <Stack.Screen name="Profile Page" component={ProfilePage} />
            <Stack.Screen
              name="Home Screen Page"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search Screen Page"
              component={SearchScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          {/* <BottomNavbar /> */}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
