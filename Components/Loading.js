import React,{Component}  from 'react';
import {View,Text} from 'react-native';

export default class Loading extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View>
                <Text>Loading</Text>
            </View>
        );
    }
}