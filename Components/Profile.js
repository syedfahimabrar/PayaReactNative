import React,{Component}  from 'react';
import {Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import Loading from "./Loading";

const defaultStyles  = require('../Styles/Styles');
const up = require('../Services/AuthService');
export default class Profile extends Component{

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
    _logout = async ()=>{
        alert('logout');
        up.logout().then((res)=>{
            console.log('res is'+res);

            if(res)
                this.props.navigation.navigate('Login');
        });
    };
    componentDidMount(){
    }
    render() {
        if(this.state.isLoading)
            return ( <Loading/> );
        else return (
            <View>
                <ImageBackground source={require('../assets/payasian.jpg')} style={{width: '100%', height: '100%'}}>
                    <ScrollView contentContainerStyle={defaultStyles.container} style={defaultStyles.container}>

                        <Text style={{fontSize:30}}>You are Logged in as {this.UserProfile.UserName} </Text>

                    </ScrollView>
                    <TouchableOpacity
                        style={defaultStyles.SubmitButtonStyle}
                        activeOpacity={.5}
                        onPress={this._logout}
                    >

                        <Text style={defaultStyles.ButtonTextStyle}> LOGOUT </Text>

                    </TouchableOpacity>


                </ImageBackground>
            </View>

        )
    }
}