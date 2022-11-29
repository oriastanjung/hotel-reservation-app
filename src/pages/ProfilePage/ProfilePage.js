import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import Button from "../../components/Button/Button";
import styles from "./ProfilePage.styles";
import useProfilePage from "./useProfilePage";
const ProfilePage = ({ navigation }) => {
  const {
    emailState,
    firstNameState,
    lastNameState,
    setemailState,
    setfirstNameState,
    setlastNameState,
    handleChangeAccountData,
  } = useProfilePage(navigation);
  return (
    <View style={styles.section}>
      <ProfileCard>
        <Text style={styles.sectionTitle}>My Account</Text>
        <View>
          <InputWithLabel
            label={"Firstname"}
            placeholder={"Input your Firstname"}
            value={firstNameState}
            onChangeText={setfirstNameState}
          />
          <InputWithLabel
            label={"Lastname"}
            placeholder={"Input your Lastname"}
            value={lastNameState}
            onChangeText={setlastNameState}
          />
          <InputWithLabel
            label={"Email"}
            placeholder={"Input your Email"}
            value={emailState}
            onChangeText={setemailState}
          />
        </View>
        <View style={styles.change}>
          <Button
            onPress={handleChangeAccountData}
            text={"Change Profile Detail"}
            isPrimary
          />
        </View>
      </ProfileCard>
      <View style={styles.btn}>
        <Button text={"Logout"} isWarning />
      </View>
    </View>
  );
};

export default ProfilePage;
