import React from 'react'
import {
    View,
    Text,
    Modal,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native'
// native base imports
import {
    Container,
    Item,
    Input,
    Icon
} from 'native-base'

import data from './Countries'

// Default render of country flag
const defaultFlag = data.filter(
    obj => obj.name === 'Bangladesh'
)[0].flag

export default class PhoneInputCustom extends React.Component {
    state = {
        flag: defaultFlag,
        modalVisible: false,
        phoneCode:'+880',
        phoneNumber: '',
    }
    onChangeText(key, value) {
        this.setState({
            [key]: value
        },()=>this.sendPhoneNumber());
    }
    sendPhoneNumber = ()=>{
        this.props.getChildPhone(this.state.phoneNumber);
    }
    sendCountryCode =(val)=>{
        this.props.getChildCountry(val);
    }
    showModal() {
        this.setState({ modalVisible: true })
    }
    hideModal() {
        this.setState({ modalVisible: false })
        // Refocus on the Input field after selecting the country code
        this.refs.PhoneInput._root.focus()
    }

    async getCountry(country) {
        const countryData = await data
        try {
            const countryCode = await countryData.filter(
                obj => obj.name === country
            )[0].dial_code
            const countryFlag = await countryData.filter(
                obj => obj.name === country
            )[0].flag
            const scountry = await countryData.filter(
                obj => obj.name === country
            )[0].code
            this.sendCountryCode(scountry)
            // Set data from user choice of country
            this.setState({ phoneNumber: countryCode,phoneCode:countryCode, flag: countryFlag })
            await this.hideModal()
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        let { flag } = this.state
        const countryData = data
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.inputarea}>

                                {/* Phone input with native-base */}
                                {/* phone section  */}
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <TouchableOpacity onPress={() => this.showModal()} style={{ flexDirection: 'row'}}>
                                        <Icon
                                            active
                                            name='call'
                                            style={styles.iconStyle}
                                        />
                                        {/* country flag */}
                                        <View><Text style={{fontSize: 20,paddingTop: '4%'}}>{flag}</Text></View>
                                        {/* open modal */}
                                        <Icon
                                            active
                                            name='md-arrow-dropdown'
                                            style={[styles.iconStyle, { marginLeft: 5 }]}
                                            onPress={() => this.showModal()}
                                        />
                                    </TouchableOpacity>

                                    <Input
                                        style={styles.input}
                                        placeholder='+880*******'
                                        placeholderTextColor='black'
                                        keyboardType={'phone-pad'}
                                        returnKeyType='done'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        secureTextEntry={false}
                                        ref='PhoneInput'
                                        value={this.state.phoneNumber}
                                        onChangeText={(val) => {
                                            if (this.state.phoneNumber===''){
                                                // render UK phone code by default when Modal is not open
                                                this.onChangeText('phoneNumber', this.state.phoneCode + val)
                                            } else {
                                                // render country code based on users choice with Modal
                                                this.onChangeText('phoneNumber', val)
                                            }
                                        }
                                        }
                                    />
                                    {/* Modal for country code and flag */}
                                    <Modal
                                        animationType="slide" // fade
                                        transparent={false}
                                        visible={this.state.modalVisible}>
                                        <View style={{ flex: 1 }}>
                                            <View style={{ flex: 10, paddingTop: 80, backgroundColor: '#5059ae' }}>
                                                <FlatList
                                                    data={countryData}
                                                    keyExtractor={(item, index) => index.toString()}
                                                    renderItem={
                                                        ({ item }) =>
                                                            <TouchableOpacity
                                                                onPress={() => this.getCountry(item.name)}>
                                                                <View
                                                                    style={
                                                                        [
                                                                            styles.countryStyle,
                                                                            {
                                                                                flexDirection: 'row',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'space-between'
                                                                            }
                                                                        ]
                                                                    }>
                                                                    <Text style={{fontSize: 45}}>
                                                                        {item.flag}
                                                                    </Text>
                                                                    <Text style={{fontSize: 20, color: '#fff'}}>
                                                                        {item.name} ({item.dial_code})
                                                                    </Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                    }
                                                />
                                            </View>
                                            <TouchableOpacity
                                                onPress={() => this.hideModal()}
                                                style={styles.closeButtonStyle}>
                                                <Text style={styles.textStyle}>
                                                    Close
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Modal>
                                </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        flexDirection: 'column',


    },
    inputarea:{
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
    input: {
        flex: 1,
        color: 'black',
        fontSize: 20
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#5059ae',
    },
    iconStyle: {
        color: 'black',
        fontSize: 28,
        paddingTop:'5%',
        paddingRight:'2%'
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#b44666',
        padding: 14,
        marginBottom: 10,
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
    },
    textStyle: {
        padding: 5,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    countryStyle: {
        flex: 1,
        backgroundColor: '#5059ae',
        borderTopColor: '#211f',
        borderTopWidth: 1,
        padding: 12,
    },
    closeButtonStyle: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#b44666',
    }
})