import React, { useState } from 'react';
import { Image,ScrollView,StyleSheet,Button, Text, View, TextInput } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import SignUp from "./Components/SIgnUp";

const MainNavigator = createStackNavigator({
  Signup:{
    screen:SignUp,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Profile: {screen: Profile},
},{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundImage: <Image
          style={StyleSheet.absoluteFill}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
      />
    }
  }
});
const App = createAppContainer(MainNavigator);
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
