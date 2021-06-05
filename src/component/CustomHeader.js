import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomHeader = ({ children }) => {
  return <Text style={styles.header}>{children}</Text>;
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    fontFamily: "Mont-Bold",
    fontSize: 20,
  },
});
