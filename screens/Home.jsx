import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText = 'Quiz App'/>
      <View style={styles.bannerContainer}>
        <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/quiz-show-3864158-3207897.png'}}
        style={styles.banner}
        resizeMode='contain'
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Category')} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width:300,
        borderRadius:20,
    },
    bannerContainer:{
    justifyContent:'center',
    alignItems: 'center',
    flex: 1
    },
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height:'100%',
    },
    button:{
        width: '100%',
        backgroundColor: '#454851',
        padding: 16,
        borderRadius: 16,
        alignItems:'center',
        marginBottom: 30
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color:'white'

    }
})