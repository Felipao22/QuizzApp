import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import image from '../assets/CustomerSurveyrafiki.png'

const Results = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View>
        <Image source={image}
        style={styles.banner}
        resizeMode='contain'/>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width:300,
    },
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height:'100%'
    },
})