import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './src/comonents/counter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import RecomendScreen from './src/screens/RecomendScreen';
import HomeHeader from './src/comonents/homeHeader';
import CoverScreen from './src/screens/CoverScreen';
import Test from './src/comonents/test';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Cover' component={CoverScreen}
          options={{
          headerShown: false
        }}
        />
        <Stack.Screen 
        name="Home"
        component={HomeScreen} 
        options={{
          header: () => <HomeHeader search={true} /> 
        }}
         

        />
        <Stack.Screen name="Detail" component={DetailScreen} 
         options={{
          headerShown:false 
        }}
          />
        <Stack.Screen name="Recommend" component={RecomendScreen}
         options={{
          header: () => <HomeHeader /> 
        }} />


      </Stack.Navigator>
    </NavigationContainer>
    
    </Provider>
  );
}
// this is your Root dont do anything else here