// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnexionScreen from './screens/ConnexionScreen';
import InscriptionScreen from './screens/InscriptionScreen';







const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Login' 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={ConnexionScreen} />
        <Stack.Screen name="Signup" component={InscriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
