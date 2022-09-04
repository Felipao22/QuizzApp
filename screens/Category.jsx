import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import Title from "../components/Title";
import { MaterialIcons } from "@expo/vector-icons";

const Category = ({ navigation }) => {
  const handleCategory = (num) => {
    navigation.navigate("Difficulty", {
      category: num,
    });
  };


  return (
    <View style={styles.container}>
      <Title titleText="Category" />
      <View style={styles.bannerContainer}>
        <TouchableOpacity
          onPress={() => handleCategory("9")}
          style={styles.button}
        >
          <MaterialIcons name='menu-book' size={80} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCategory("11")}
          style={styles.button}
        >
          <MaterialIcons name='local-movies' size={80} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCategory("10")}
          style={styles.button}
        >
          <MaterialIcons name='school' size={80} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCategory("21")}
          style={styles.button}
        >
          <MaterialIcons name='sports' size={80} color='white' />
        </TouchableOpacity>
        {/* <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/creative-brainstorming-2042865-1729023.png'}}
      style={styles.banner}
      resizeMode='contain'
      /> */}
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: "40%",
    backgroundColor: "#219ebc",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
