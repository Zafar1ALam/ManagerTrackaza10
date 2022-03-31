import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';
import SplashScreen from 'react-native-splash-screen'


const SignIn = ({ navigation }) => {
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);

    const [stateData, setStataData] = useState({

        email: '',
        password: '',
    }
    )
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    const handleValidEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            console.log('true')
            return true;

        }
        else {
            console.log('falsse')
            return false;
        }
    }

    const login = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }

        if (stateData.password == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidPassword(false)
        }
        if (stateData.emailAddress != '' && stateData.password != ''

            && handleValidEmail(stateData.email)) {
            navigation.navigate("Welcome")
        }


    }

    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={{
                    //backgroundColor: 'red', 
                    flex: 1,
                    // alignItems: 'center',
                }}>
                    <View style={{
                        flex: 0.35,//backgroundColor: 'green',
                        justifyContent: 'center',
                        alignSelf: 'center', //marginTop: '15%'
                    }}>
                        <SvgXml xml={Svgs.logoSSFR} style={{ alignSelf: 'center' }} />
                        <Text style={STYLES.fontSize25_074B08_Arial_Bold}>Trackaza</Text>

                    </View>
                    <View style={{ //backgroundColor: 'red',
                        flex: 0.45
                    }}>
                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='Email' xml={Svgs.logoHuman}
                                onChangeText={(text) => {
                                    setStateIsValidEmail(true)
                                    setStataData({
                                        ...stateData, email: text
                                    })
                                }} />
                            {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}

                        </View>

                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='Password' xml={Svgs.lock}
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    setStateIsValidPassword(true)
                                    setStataData({
                                        ...stateData, password: text
                                    })
                                }}
                            />
                            {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Password</Text> : null}
                        </View>
                        <TouchableRipple onPress={() => navigation.navigate("ForgotPassword")} style={{
                            alignSelf: 'flex-end',
                            paddingHorizontal: '3%', paddingVertical: '3%'
                        }}>
                            <Text style={[STYLES.fontSize12_black1C1A1A_Arial_400,]}>Forgot Password?</Text>
                        </TouchableRipple>

                    </View>
                    <View style={{
                        //  backgroundColor: 'orange',
                        justifyContent: 'flex-end',
                        flex: 0.2, paddingBottom: '15%'
                    }}>
                        <Button1 text="SIGNIN"
                            onPress={() => login()} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

SignIn.propTypes = {

};

export default SignIn;