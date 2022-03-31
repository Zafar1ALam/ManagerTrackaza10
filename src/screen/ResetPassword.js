import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';
import AntDesign from 'react-native-vector-icons/AntDesign'

const ResetPassword = ({ navigation }) => {
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidConfirmPassword, setStateIsValidConfirmPassword] = useState(true);
    const [stateData, setStataData] = useState({

        password: '',
        confirmPassword: ''
    })
    const passwordCheck = () => {
        if (stateData.password === stateData.confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    }
    const continue1 = () => {

        console.log(stateData.password)
        console.log(stateData.confirmPassword)



        if (stateData.password == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidPassword(false)
        }

        if (stateData.confirmPassword == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidConfirmPassword(false)



        }
        console.log(passwordCheck())
        if (!passwordCheck()) {
            console.log('a')
            alert("enter same password and confirm password")
        }


        if (stateData.password != '' && stateData.confirmPassword != '' && passwordCheck()) {
            navigation.navigate("SignIn")
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
                    <TouchableRipple style={{ marginTop: '10%', alignSelf: 'flex-start' }}
                        onPress={() => { navigation.goBack() }}>
                        <AntDesign name="left" size={23} color={COLORS.black000000}
                        />
                    </TouchableRipple>
                    <View style={{
                        flex: 0.25,//backgroundColor: 'green',
                        justifyContent: 'center',
                        alignSelf: 'center', //marginTop: '15%'
                    }}>
                        <SvgXml xml={Svgs.logoSSFR} style={{ alignSelf: 'center' }} />
                        <Text style={STYLES.fontSize25_074B08_Arial_Bold}>Trackaza</Text>

                    </View>
                    <View style={{ //backgroundColor: 'red',
                        flex: 0.55
                    }}>
                        <Text style={[STYLES.fontSize21_black1C1A1A_Arial_Bold,
                        { alignSelf: 'center', marginBottom: '15%', marginTop: '7%' }]}>Reset Password</Text>
                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='New Password'
                                xml={Svgs.lock}
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

                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='Confirm New Password' xml={Svgs.lock}
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    setStateIsValidConfirmPassword(true)
                                    setStataData({
                                        ...stateData, confirmPassword: text
                                    })
                                }}
                            />
                            {stateIsValidConfirmPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Confirm Password </Text> : null}
                        </View>

                    </View>
                    <View style={{
                        //  backgroundColor: 'orange',
                        justifyContent: 'flex-end',
                        flex: 0.2, paddingBottom: '15%'
                    }}>
                        <Button1 text="CONTINUE"
                            onPress={() => { continue1() }} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

ResetPassword.propTypes = {

};

export default ResetPassword;