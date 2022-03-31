import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox } from 'react-native-paper';
import Button1 from '../comp/Button1';
import Box from '../comp/Box';
import LastBox from '../comp/LastBox';
const Welcome = ({ navigation }) => {
    return (
        <View style={STYLES.withoutpaddingcontainer}>

            <View style={[{
                flex: 0.2, backgroundColor: COLORS.green074B08,
                justifyContent: 'center', alignItems: 'center'
            }]}>
                <Text style={STYLES.fontSize27_whiteFFFFFF_Arial_Bold}>Welcome , Username here</Text>

            </View>
            <View style={{
                flex: 0.70, //backgroundColor: 'red',
                paddingHorizontal: '7%'
            }}>
                <View style={{
                    flexDirection: 'row', //width: '70%',
                    marginTop: '5%', justifyContent: 'space-between'
                }}>
                    <Box xml={Svgs.balanceAccounts} text="BALANCE ACCOUNTS"
                        onPress={() => navigation.navigate("Account")} />
                    <Box xml={Svgs.dollar} text="TURN OVERS"
                        onPress={() => { navigation.navigate("Turnover") }} />
                </View>

                <View style={{

                    marginTop: '5%',
                }}>
                    <LastBox xml={Svgs.comission} text="ALARM REMINDERS" />

                </View>
            </View>
            <View style={{
                flex: 0.1, //backgroundColor: 'green',
                justifyContent: 'flex-start',
                // alignItems: 'center',
                paddingHorizontal: '7%'
                //   , ,
            }}>


                <Button1 text="LOGOUT"
                    onPress={() => navigation.navigate("SignIn")} />


            </View>
        </View >
    );
};

Welcome.propTypes = {

};

export default Welcome;