import React, {Component} from 'react';
import {StyleSheet,Platform,KeyboardAvoidingView , Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
// noinspection ES6CheckImport
import PhoneInputCustom from './PhoneInput';

const auth = require('../Services/AuthService');

const defaultStyles = require("../Styles/Styles");
export default class SignUp extends Component{
    constructor(props) {
        super(props);
        this.setinitialState();
    }
    setinitialState(){
        this.state = {
            fullname: '',
            username: '',
            password: '',
            confirmpassword:'',
            email: '',
            country: '',
            phonenumber:'',
            SponsorUser:''
        };
    }
    getPhoneNumber = (childPhone) => {
        this.setState({phonenumber: childPhone});
        console.log(childPhone);
    };
    getCountryCode = (code) => {
        this.setState({country:code});
    };
    _signup = async () =>{
        let response = await auth.signup(this.state.username,this.state.password,
            this.state.email,this.state.fullname,this.state.phonenumber,this.state.country,
            this.state.SponsorUser);
        if(response == true){
            alert('signup successfull');
            this.setinitialState();
        }else{
            alert(response);
            console.log(response)
        }
    };
    render() {
        return(
            <KeyboardAvoidingView
                behavior= {"padding"}
                keyboardVerticalOffset={Platform.select({ios: 0, android: 0})}
                enabled
                style={{flexGrow:1,height:'100%'}}
            >
                <ImageBackground source={require('../assets/payasian.jpg')} style={{flex:1,width: '100%', height: '100%'}}>
                    <ScrollView bounces={false} keyboardShouldPersistTaps='handled' style={defaultStyles.container}>

                        <Image
                            style={defaultStyles.Logonew}
                            source={require('../assets/paya.jpg')}
                        />
                        <View style = {{marginTop:"1%"}}>

                            <TextInput placeholder='Full Name' style={defaultStyles.textInput}
                                       onChangeText={(fullname) => this.setState({fullname})}
                                       placeholderTextColor="black"
                                       value={this.state.fullname}
                            />
                            <TextInput placeholder='User Name' style={defaultStyles.textInput}
                                       onChangeText={(username) => this.setState({username})}
                                       placeholderTextColor="black"
                                       value={this.state.username}
                            />
                            <TextInput secureTextEntry={true} placeholder='Password' style={defaultStyles.textInput}
                                       onChangeText={(password) => this.setState({password})}
                                       placeholderTextColor="black"
                                       value={this.state.password}
                            />
                            <TextInput secureTextEntry={true} placeholder='Confirm Password' style={defaultStyles.textInput}
                                       onChangeText={(confirmpassword) => this.setState({confirmpassword})}
                                       placeholderTextColor="black"
                                       value={this.state.confirmpassword}
                            />
                            <TextInput  placeholder='Email' style={defaultStyles.textInput}
                                       onChangeText={(email) => this.setState({email})}
                                       placeholderTextColor="black"
                                       value={this.state.email}
                            />
                            <PhoneInputCustom getChildPhone = {this.getPhoneNumber} getChildCountry = {this.getCountryCode} />

                            <TextInput placeholder='Sponsor User' style={defaultStyles.textInput}
                                       onChangeText={(SponsorUser) => this.setState({SponsorUser})}
                                       placeholderTextColor="black"
                                       value={this.state.SponsorUser}
                            />

                            <TouchableOpacity
                                style={defaultStyles.SubmitButtonStyle}
                                activeOpacity={.5}
                                onPress={this._signup}
                            >

                                <Text style={defaultStyles.ButtonTextStyle}> SIGNUP </Text>

                            </TouchableOpacity>
                            <View style={{flexDirection: "row"}}>
                                <View style={{flex: 1}}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: 'black',
                                            marginTop: 50,
                                            justifyContent: 'flex-start',
                                            textAlign: 'left'
                                        }}>
                                        Sign Up?
                                    </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: 'black',
                                            marginTop: 50,
                                            justifyContent: 'flex-end',
                                            textAlign: 'right'
                                        }}>
                                        Forgot Password?
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>


                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }

}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 60,
    },
});