import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";
const DescriptionScreen = ({ route, list }) => {
  const { id } = route.params;
  const descriptionData = list.filter((item) => item.id === id);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: descriptionData[0].download_url }}
        style={styles.imageContainer}
        resizeMode="cover"
      />
      <View style={{ flex: 1, marginTop: "2%", paddingHorizontal: "2%" }}>
        <Text style={styles.title}>{descriptionData[0].author}</Text>
        <Text style={styles.description}>
          download_url: {descriptionData[0].download_url}
        </Text>
        <Text style={styles.description}>url: {descriptionData[0].url}</Text>
        <Text style={styles.description}>
          height: {descriptionData[0].height}
        </Text>
        <Text style={styles.description}>
          width: {descriptionData[0].width}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  list: state.data.list,
});

export default connect(mapStateToProps)(DescriptionScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: { width: "100%", height: "80%" },
  title: {
    fontFamily: "Mont-Bold",
    fontSize: 16,
    paddingBottom: "1%",
  },
  description: {
    fontFamily: "Mont-Reg",
    fontSize: 12,
  },
});
