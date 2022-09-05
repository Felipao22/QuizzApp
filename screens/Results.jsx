import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
// import image from "../assets/CustomerSurveyrafiki.png";
import Title from "../components/Title";

const Results = ({ navigation, route }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      {score == 100 ? (
        <View style={styles.resultCont}>
          <Title titleText="Perfect" />
          <View style={styles.bannerContainer}>
            <Image
              source={{
                uri: "https://cdni.iconscout.com/illustration/premium/thumb/businessman-celebrating-win-4588449-3821743.png",
              }}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.scoreText}>Your Score is: {score}%</Text>
        </View>
      ) : score > 80 ? (
        <View style={styles.resultCont}>
          <Title titleText="Excellent" />
            <Text style={styles.scoreText}>Your Score is: {score}%</Text>
          <View style={styles.bannerContainer}>
            <Image
              source={{
                uri: "https://cdni.iconscout.com/illustration/premium/thumb/successful-businessman-celebrating-victory-4587643-3816534.png",
              }}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>
        </View>
      ) : score > 50 ? (
        <View style={styles.resultCont}>
          <Title titleText="Good" />
            <Text style={styles.scoreText}>Your Score is: {score}%</Text>
          <View style={styles.bannerContainer}>
            <Image
              source={{
                uri: "https://cdni.iconscout.com/illustration/premium/thumb/essman-moving-towards-victory-4819001-4010289.png",
              }}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>
        </View>
      ) : score === 0 ? (
        <View style={styles.resultCont}>
          <Title titleText="Kepp trying!" />
            <Text style={styles.scoreText}>Your Score is: {score}%</Text>
          <View style={styles.bannerContainer}>
            <Image
              source={{
                uri: "https://cdni.iconscout.com/illustration/premium/thumb/startup-failure-5893207-4890536.png",
              }}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>
        </View>
      ) : (
        <View style={styles.resultCont}>
          <Title titleText="Not so good" />
          <Text style={styles.scoreText}>Your Score is: {score}%</Text>
          <View style={styles.bannerContainer}>
            <Image
              source={{
                uri: "https://cdni.iconscout.com/illustration/premium/thumb/lling-due-to-business-failure-5627313-4688102.png",
              }}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Results;

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
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "800",
    alignSelf: "center",
    color:'#8C7390'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginBottom: 5,
    bottom: 0,
  },
  resultCont: {
    height: 600,
    justifyContent: "center",
    alignItems: "center",
  },
});
