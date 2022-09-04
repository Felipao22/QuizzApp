import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Results from '../screens/Results';
import Category from '../screens/Category';
import Difficulty from '../screens/Difficulty';



const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Quiz" component={Quiz}  options={{headerShown:false}}/>
        <Stack.Screen name="Results" component={Results}  options={{headerShown:false}}/>
        <Stack.Screen name="Category" component={Category}  options={{headerShown:false}}/>
        <Stack.Screen name="Difficulty" component={Difficulty}  options={{headerShown:false}}/>
      </Stack.Navigator>

  );
}

export default MyStack;