import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import Title from "../components/Title";

const Difficulty = ({ navigation, route }) => {
  const { category } = route.params;

  const handleDifficulty = (param) => {
    navigation.navigate("Quiz", {
      difficulty: param,
      category: category,
    });
  };

  return (
    <View style={styles.container}>
      <Title titleText="Difficulty" />
      <View style={styles.bannerContainer}>
        <TouchableOpacity
          onPress={() => handleDifficulty("easy")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDifficulty("medium")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDifficulty("hard")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Hard</Text>
        </TouchableOpacity>
        {/* <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/creative-brainstorming-2042865-1729023.png'}}
      style={styles.banner}
      resizeMode='contain'
      /> */}
      </View>
    </View>
  );
};

export default Difficulty;

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
    width: "100%",
    backgroundColor: "#8C7390",
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
