import { View, Image } from 'react-native';
import React from 'react';

export default function ConnexionScreen() {
  return (
    <View className="bg-gray-900 h-full w-full ">
    <Image className="h-1/2 w-full absolute " source={require('../assets/Chef-pana.png')} />    
    </View>
  )
}

