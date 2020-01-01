'use strict';

var React = require('react-native');

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({

    ButtonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    SubmitButtonStyle: {
        marginTop: 30,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#3368FF',
        borderRadius: 10,
        borderColor: '#fff'
    },
    container: {
        height: '100%',
        padding: 20
    },
    Logo: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 50 / 2,
        overflow: "hidden",
        borderWidth: 3,
        marginVertical: 30
    },
    Logonew: {
        alignSelf: 'center',
        marginVertical: 30,
        width: 140,
        height: 120,
        resizeMode: 'stretch'
    },
    textInput: {
        color: 'black',
        fontSize: 20,
        borderWidth: 2,
        padding: 4,
        borderBottomColor: 'gray',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 1,
        marginVertical: 8
    },

});