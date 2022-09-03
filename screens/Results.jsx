import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
// import image from "../assets/CustomerSurveyrafiki.png";
import Title from '../components/Title'

const Results = ({ navigation, route }) => {
  const {score} = route.params;

  const resultBanner = score > 40 ? 'https://cdni.iconscout.com/illustration/premium/thumb/successful-businessman-celebrating-victory-4587643-3816534.png' : 'https://cdni.iconscout.com/illustration/premium/thumb/startup-failure-5893207-4890536.png'
  return (
    <View style={styles.container}>
      <Title titleText = 'Results'/>
      <Text style={styles.scoreText}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image source={{uri:resultBanner}} style={styles.banner} resizeMode="contain" />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  banner:{
    height: 300,
    width:300,
},
bannerContainer:{
justifyContent:'center',
alignItems: 'center',
flex: 1
},
container:{
    paddingTop: 40,
    paddingHorizontal: 20,
    height:'100%'
},
button:{
    width: '100%',
    backgroundColor: '#219ebc',
    padding: 16,
    borderRadius: 16,
    alignItems:'center',
    marginBottom: 30
},
buttonText:{
    fontSize: 24,
    fontWeight: '600',
    color:'white'
},
scoreText: {
  fontSize: 24,
  fontWeight: '800',
  alignSelf:'center'
}
});
