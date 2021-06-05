import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomText = ({ header, text }) => {
  return (
    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
      <Text style={styles.headerText}>{header}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Mont-Med",
    fontSize: 16,
  },
  headerText: {
    fontFamily: "Mont-Bold",
    fontSize: 16,
  },
});
