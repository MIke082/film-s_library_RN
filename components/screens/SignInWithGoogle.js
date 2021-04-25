import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { useNavigation } from '@react-navigation/core';
import { AntDesign } from '@expo/vector-icons';

const SignInWithGoogle = () => {

  const navigation = useNavigation();

  const signInAsync = async () => {
    try {
      const { type, user } = await Google.logInAsync({
        androidClientId: '602899170663-glolm5f41fs7qfcaic4s5mjh0490s28h.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      }
      );

      if (type === 'success') {
        navigation.navigate('WelcomeFromGoogle', { user: user });
      }
    } catch (error) {
      console.log('Error with login or password', error);
    }
  };

  return (
    <View >
      <TouchableOpacity style={styles.btn} onPress={signInAsync} >
        <AntDesign name='google' size={20} color='white' />
        <Text style={styles.btnText}>Or with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    backgroundColor: '#f34444',
    width: 170,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10

  },
  btnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 10

  }
});

export default SignInWithGoogle;