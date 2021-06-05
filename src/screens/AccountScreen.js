import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomText from "../component/CustomText";

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://loremflickr.com/640/360" }}
        style={styles.imageContainer}
        resizeMode="cover"
      />
      <View style={styles.profileContainer}>
        <CustomText header="Name:" text=" Veer Vijaysingh Rana" />
        <CustomText header="Age:" text=" 27" />
        <CustomText header="Description:" text=" App Developer" />
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    // borderBottomLeftRadius: 200,
    // borderBottomRightRadius: 200,
  },
  profileContainer: {
    padding: 20,
  },
  textHeader: {
    fontFamily: "Mont-Med",
    fontSize: 16,
  },
  text: {
    fontFamily: "Mont-Bold",
    fontSize: 16,
  },
});
