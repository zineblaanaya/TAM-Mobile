import { View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';

export default function ConnexionScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-gray-900 h-full w-full ">
    <Image className="h-1/2 w-full absolute " source={require('../assets/Chef-pana.png')} />    


   {/* title and forms */}
    <View className="h-full w-full flex justify-around pt-40 pb-10">

  {/* title */}
    <View className="flex items-center">
      <Text className="text-yellow-400 font-bold tracking-wider text-3xl pt-60">T A M</Text>
      <Text className="text-yellow-400 font-light tracking-wider text-1xl ">Trouve à Manger</Text>
    </View>


  {/* form */}

  <View className="flex items-center mx-4 space-y-4 pb-8"> 

  <View className="bg-gray-300 p-5 rounded-2xl w-full">
    <TextInput placeholder="Email" placeholderTextColor={'black'}  ></TextInput>
  </View>

  <View className="bg-gray-300 p-5 rounded-2xl w-full mb-3">
    <TextInput placeholder="Password" placeholderTextColor={'black'} secureTextEntry ></TextInput>
  </View>

  <View className="w-full">
    <TouchableOpacity className="w-full bg-yellow-400 p-3 rounded-2xl mb-3">
    <Text className="text-xl font-bold text-gray-900 text-center">LOGIN</Text>
    </TouchableOpacity>
  </View>


  <View className= "flex-row justify-center">

  
  <Text className="text-gray-300">Don't have an account ? </Text>
  
   
    <TouchableOpacity onPress = {()=> navigation.push('SignUp')}>
    <Text className="text-yellow-400">SignUp</Text>
    </TouchableOpacity>


  <View/>



  </View>

  </View>
    </View>
    </View>

  )
}

