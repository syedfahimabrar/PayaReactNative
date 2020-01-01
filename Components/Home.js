import React, {Component} from "react";
import {ImageBackground, ScrollView, Text, View} from "react-native";

export default class Home extends Component{
    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/payasian.jpg')} style={{width: '100%', height: '100%'}}>
                    <ScrollView contentContainerStyle={defaultStyles.container} style={defaultStyles.container}>

                        <Text style={{fontSize:30}}>You are Logged in as {UserProfile.UserName} </Text>

                    </ScrollView>


                </ImageBackground>
            </View>

        )
    }
}