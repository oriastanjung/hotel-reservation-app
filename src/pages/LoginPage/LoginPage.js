import { Text, View, TextInput, ScrollView } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";
import styles from "./LoginPage.styles";
import { StatusBar } from "expo-status-bar";
import useLoginPage from "./useLoginPage";
const LoginPage = ({ navigation }) => {
  function SvgTop() {
    return (
      <Svg
        width={500}
        height={324}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
          fill="url(#prefix__paint0_linear_103:6)"
          fillOpacity={0.5}
        />
        <Path
          d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
          fill="url(#prefix__paint1_linear_103:6)"
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear_103:6"
            x1={492.715}
            y1={231.205}
            x2={480.057}
            y2={364.215}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7FE9DE" />
            <Stop offset={1} stopColor="#FF3CBD" />
          </LinearGradient>
          <LinearGradient
            id="prefix__paint1_linear_103:6"
            x1={7.304}
            y1={4.155}
            x2={144.016}
            y2={422.041}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7FE9DE" />
            <Stop offset={1} stopColor="#FF3CBD" />
          </LinearGradient>
        </Defs>
      </Svg>
    );
  }
  const { email, password, setEmail, setPassword, handleLogin, err } =
    useLoginPage();
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>
        <TextInput
          placeholder="user@gmail.com"
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="password"
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
        />
        <ButtonGradient text={"SIGN IN"} onPress={handleLogin} />
        <StatusBar style="auto" />
      </View>
      {err && (
        <Text
          style={{
            color: "red",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {err}
        </Text>
      )}
    </ScrollView>
  );
};

export default LoginPage;
