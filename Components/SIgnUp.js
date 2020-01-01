import React, {Component} from 'react';
import {Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
export default class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return(
            <View>
                <ImageBackground source={require('../assets/payasian.jpg')} style={{width: '100%', height: '100%'}}>
                    <ScrollView contentContainerStyle={defaultStyles.container} style={defaultStyles.container}>

                        <Image
                            style={defaultStyles.Logonew}
                            source={require('../assets/paya.jpg')}
                        />
                        <View style = {{marginTop:"20%"}}>

                            <TextInput placeholder='Username' style={defaultStyles.textInput}
                                       onChangeText={(username) => this.setState({username})}
                                       placeholderTextColor="black"
                                       value={this.state.username}
                            />
                            <TextInput secureTextEntry={true} placeholder='Password' style={defaultStyles.textInput}
                                       onChangeText={(password) => this.setState({password})}
                                       placeholderTextColor="black"
                                       value={this.state.password}
                            />
                            <TouchableOpacity
                                style={defaultStyles.SubmitButtonStyle}
                                activeOpacity={.5}
                                onPress={this._login}
                            >

                                <Text style={defaultStyles.ButtonTextStyle}> LOGIN </Text>

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
            </View>
        )
    }
}