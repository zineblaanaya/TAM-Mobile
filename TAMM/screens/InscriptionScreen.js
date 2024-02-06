// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/core';
// // import {supabase} from '../../TAMM-BACK/db/supabase';
// import axios from 'axios';

// // export default function InscriptionScreen() {
// //     const navigation = useNavigation();

// //     const [lastName, setLastName] = useState("");
// //     const [firstName, setFirstName] = useState("");
// //     const [emailValue, setEmailValue] = useState("");
// //     const [passwordValue, setPasswordValue] = useState("");
// //     const [confirmPassword, setConfirmPassword] = useState("");

// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         alert(`Bonjour ${emailValue}`);
// //         console.log(`${passwordValue}`);
// //         setEmailValue("");
// //     };

// //     const handleEmailChange = (value) => {
// //         setEmailValue(value);
// //     };
// export default function InscriptionScreen() {
//   const navigation = useNavigation();

//   const [lastName, setLastName] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [emailValue, setEmailValue] = useState("");
//   const [passwordValue, setPasswordValue] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = async () => {
//       try {
//           const response = await axios.post('http://votre-backend.com/signup', {
//               firstName,
//               lastName,
//               email: emailValue,
//               password: passwordValue,
//               confirmationPassword: confirmPassword
//           });

//           if (response.data.success) {
//               // Affichez un message de réussite ou effectuez une action appropriée
//               alert('Inscription réussie');
//           } else {
//               // Affichez un message d'erreur
//               alert('Erreur lors de l\'inscription');
//           }
//       } catch (error) {
//           console.error('Erreur lors de l\'inscription :', error);
//           alert('Erreur lors de l\'inscription');
//       }
//   };

//     return (
//         <View className="bg-gray-900 h-full w-full ">
//             <View className="flex items-center">
//                 <Text className="text-yellow-400 font-bold text-3xl pt-20 pb-10 tracking-wider">Sign Up</Text>
//             </View>

//             <View className="flex items-center mx-4 space-y-6 pb-8">
//                 <View className="bg-gray-300 p-5 rounded-2xl w-full">
//                     <TextInput placeholder="LastName" placeholderTextColor={'black'} value={lastName} onChangeText={(value) => setLastName(value)} />
//                 </View>
//                 <View className="bg-gray-300 p-5 rounded-2xl w-full">
//                     <TextInput placeholder="FirstName" placeholderTextColor={'black'} value={firstName} onChangeText={(value) => setFirstName(value)} />
//                 </View>
//                 <View className="bg-gray-300 p-5 rounded-2xl w-full">
//                     <TextInput placeholder="Email" placeholderTextColor={'black'} value={emailValue} onChangeText={handleEmailChange} type="email" autoComplete='username' required />
//                 </View>
//                 <View className="bg-gray-300 p-5 rounded-2xl w-full">
//                     <TextInput placeholder="Password" placeholderTextColor={'black'} secureTextEntry value={passwordValue} onChangeText={(value) => setPasswordValue(value)} />
//                 </View>
//                 <View className="bg-gray-300 p-5 rounded-2xl w-full mb-3">
//                     <TextInput placeholder="ConfirmPassword" placeholderTextColor={'black'} secureTextEntry value={confirmPassword} onChangeText={(value) => setConfirmPassword(value)} />
//                 </View>
//                 <View className="w-full">
//                     <TouchableOpacity className="w-full bg-yellow-400 p-3 rounded-2xl mb-3" onPress={handleSubmit}>
//                         <Text className="text-xl font-bold text-gray-900 text-center">Sign Up</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View className="flex-row justify-center">
//                     <Text className="text-gray-300">Already have an account ? </Text>
//                     <TouchableOpacity onPress={() => navigation.push('Login')}>
//                         <Text className="text-yellow-400">Login</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );
// }

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
 

 function InscriptionScreen() {
    const navigation = useNavigation();

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = (name, value) => {
      switch(name) {
          case 'lastName':
              setLastName(value);
              break;
          case 'firstName':
              setFirstName(value);
              break;
          case 'email':
              setEmailValue(value);
              break;
          case 'password':
              setPasswordValue(value);
              break;
          case 'confirmPassword':
              setConfirmPassword(value);
              break;
          default:
              break;
      }
  };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/signup', {
                firstName,
                lastName,
                email: emailValue,
                password: passwordValue,
                confirmationPassword: confirmPassword
            });

            if (response.data.success) {
                
                alert('Inscription réussie');
            } else {
                
                alert('Erreur lors de l\'inscription');
            }
        } catch (error) {
            console.error('Erreur lors de l\'inscription :', error);
            alert('Erreur lors de l\'inscription');
        }
    };

    return (
      <View className="bg-gray-900 h-full w-full ">
          <View className="flex items-center">
              <Text className="text-yellow-400 font-bold text-3xl pt-20 pb-10 tracking-wider">Sign Up</Text>
          </View>

          <View className="flex items-center mx-4 space-y-6 pb-8">
              <View className="bg-gray-300 p-5 rounded-2xl w-full">
                  <TextInput placeholder="LastName" placeholderTextColor={'black'} value={lastName} onChangeText={(value) => handleChange('lastName', value)} />
              </View>
              <View className="bg-gray-300 p-5 rounded-2xl w-full">
                  <TextInput placeholder="FirstName" placeholderTextColor={'black'} value={firstName} onChangeText={(value) => handleChange('firstName', value)} />
              </View>
              <View className="bg-gray-300 p-5 rounded-2xl w-full">
                  <TextInput placeholder="Email" placeholderTextColor={'black'} value={emailValue} onChangeText={(value) => handleChange('email', value)} type="email" autoComplete='username' required />
              </View>
              <View className="bg-gray-300 p-5 rounded-2xl w-full">
                  <TextInput placeholder="Password" placeholderTextColor={'black'} secureTextEntry value={passwordValue} onChangeText={(value) => handleChange('password', value)} />
              </View>
              <View className="bg-gray-300 p-5 rounded-2xl w-full mb-3">
                  <TextInput placeholder="ConfirmPassword" placeholderTextColor={'black'} secureTextEntry value={confirmPassword} onChangeText={(value) => handleChange('confirmPassword', value)} />
              </View>
              <View className="w-full">
                  <TouchableOpacity className="w-full bg-yellow-400 p-3 rounded-2xl mb-3" onPress={handleSubmit}>
                      <Text className="text-xl font-bold text-gray-900 text-center">Sign Up</Text>
                  </TouchableOpacity>
              </View>
              <View className="flex-row justify-center">
                  <Text className="text-gray-300">Already have an account ? </Text>
                  <TouchableOpacity onPress={() => navigation.push('Login')}>
                      <Text className="text-yellow-400">Login</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </View>
  );
}
export default InscriptionScreen;
