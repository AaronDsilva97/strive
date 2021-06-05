import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { addData } from "../redux/action";

const { width } = Dimensions.get("window").width;

const HomeScreen = ({ navigation, addData }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const data = await fetch("https://picsum.photos/v2/list");
    await data.json().then((res) => {
      addData(res);
      setList(res);
    });
  };

  useEffect(() => {
    fetchList();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.cardContainer}
      onPress={() => navigation.navigate("DescriptionScreen", { id: item.id })}
    >
      <Image
        source={{ uri: item.download_url }}
        style={styles.imageContainer}
        resizeMode="cover"
      />
      <View style={{ marginTop: "1%" }}>
        <Text style={styles.title}>{item.author}</Text>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
          {item.url}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addData: (item) => dispatch(addData(item)),
});

export default connect(null, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    margin: "3%",
    backgroundColor: "#FFFFFF",
    elevation: 12,
    borderRadius: 20,
    padding: "3%",
  },
  imageContainer: {
    height: 100,
    width: "40%",
    marginHorizontal: "2%",
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: "Mont-Bold",
  },
  description: {
    fontSize: 14,
    fontFamily: "Mont-Reg",
    width: "40%",
  },
});
