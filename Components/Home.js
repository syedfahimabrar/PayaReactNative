import React, {Component} from "react";
import {ImageBackground, ScrollView, Text, View} from "react-native";
import Loading from "./Loading";

const up = require('../Services/AuthService');
export default class Home extends Component{
    constructor(props) {
        super(props);
        constructor(props) {
            super(props);
            this.state = {
                isLoading:true
            };
            up.getUserProfile().then((p)=> {
                this.UserProfile = p;
                if(p==null){
                    this.props.navigation.navigate('Login');
                    alert('Login First');
                }
                console.log('name in cons '+this.UserProfile.UserName);
                this.setState({
                    isLoading: false
                });
            });
        }
    }
    render() {
        if(this.state.isLoading)
            return ( <Loading/> );
        else return (
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