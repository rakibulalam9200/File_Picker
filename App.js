import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Button} from 'react-native';
import * as DocumentPicker from "expo-document-picker";
import {useState} from "react";
import HomeScreen from "./src/screens/HomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import MapScreen from "./src/screens/MapScreen";



const Stack = createNativeStackNavigator();
export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Map" component={MapScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}



