import React, { useState } from 'react';
import { Image,ScrollView,StyleSheet,Button, Text, View, TextInput } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from "./Components/Login";
import Profile from "./Components/Profile";

const MainNavigator = createStackNavigator({
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
/*export default function App() {
  const [textvar,testSetter] = useState(1);
  const [isActive,activeHandler] = useState(false);
  const testSetterHandler = (val) =>{
    testSetter(textvar+1);
  };
  state = {
    isLoggedIn: false
  };
  const bgimage = "https://payasian.co/content/pa_auth/images/ppt_bgmain.jpg";
  const resetHandler = (val)=>{
    testSetter(0);
    activeHandler(!isActive);
  };
  return (
      <APPnav />
    /!*<Login  />*!/
      /!*<Profile/>*!/
  );
}*/
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
