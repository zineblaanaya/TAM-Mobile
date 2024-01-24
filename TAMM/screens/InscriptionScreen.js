import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';

const signUpForm = () =>{
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
}

const handleSubmit = (event) => {
  event.preventDefault()
  alert (`Bonjour ${emailValue}`)
  console.log(`${passwordValue}`)
  setEmailValue
}

export default function InscriptionScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-gray-900 h-full w-full ">
      <View className="flex items-center">
        <Text className="text-yellow-400 font-bold text-3xl pt-20 pb-10 tracking-wider">Sign Up</Text>
      </View>
       {/* form */}

  <View className="flex items-center mx-4 space-y-6 pb-8"> 

  <View className="bg-gray-300 p-5 rounded-2xl w-full">
  <TextInput placeholder="LastName" placeholderTextColor={'black'}  ></TextInput>
</View>

<View className="bg-gray-300 p-5 rounded-2xl w-full">
  <TextInput placeholder="FirstName" placeholderTextColor={'black'}  ></TextInput>
</View>

<View className="bg-gray-300 p-5 rounded-2xl w-full">
  <TextInput placeholder="Email" placeholderTextColor={'black'}  ></TextInput>
</View>

<View className="bg-gray-300 p-5 rounded-2xl w-full">
  <TextInput placeholder="Password" placeholderTextColor={'black'} secureTextEntry ></TextInput>
</View>

<View className="bg-gray-300 p-5 rounded-2xl w-full mb-3">
  <TextInput placeholder="ConfirmPassword" placeholderTextColor={'black'} secureTextEntry ></TextInput>
</View>


<View className="w-full">
  <TouchableOpacity className="w-full bg-yellow-400 p-3 rounded-2xl mb-3">
  <Text className="text-xl font-bold text-gray-900 text-center">Sign Up</Text>
  </TouchableOpacity>
</View>


<View className= "flex-row justify-center">


<Text className="text-gray-300">Already have an account ? </Text>

 
  <TouchableOpacity onPress = {()=> navigation.push('Login')}>
  <Text className="text-yellow-400">Login</Text>
  </TouchableOpacity>


<View/>



</View>
</View>


    </View>
  )
}