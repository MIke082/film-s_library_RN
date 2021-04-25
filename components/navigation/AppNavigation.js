import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import HomePage from '../screens/HomePage';
import GetList from '../screens/GetList';
import CardList from '../screens/CardList';
import Card from '../screens/Card';
import Header from '../screens/Header';
import Cart from '../screens/Cart';
import WelcomeFromFacebook from '../screens/WelcomeFromFacebook';
import WelcomeFromGoogle from '../screens/WelcomeFromGoogle';


const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name='GetList' component={GetList} />
        <Stack.Screen name='CardList' component={CardList} />
        <Stack.Screen name='Card' component={Card} options={{ headerShown: false }} />
        <Stack.Screen name='Header' component={Header} />
        <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name='WelcomeFromFacebook' component={WelcomeFromFacebook} options={{ headerShown: false }} />
        <Stack.Screen name='WelcomeFromGoogle' component={WelcomeFromGoogle} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
