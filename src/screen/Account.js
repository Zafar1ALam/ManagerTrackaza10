import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';


import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { DataTable, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';

import Header from '../comp/Header';
import ButtonSvg from '../comp/ButtonSvg';
import { SvgXml } from 'react-native-svg';
import LastBox from '../comp/LastBox';

const Account = ({ navigation }) => {
    return (
        <View style={STYLES.withoutpaddingcontainer}>

            <View style={[{
                flex: 0.2, backgroundColor: COLORS.green074B08,
                //justifyContent: 'center', 
                paddingLeft: '10%',

            }]}>
                <Header xml={Svgs.goBack} xml1={Svgs.balanceAccounts}
                    text="ACCOUNT"
                    onPress={() => { navigation.goBack() }} />

            </View>

            <View style={{
                flex: 0.47, //backgroundColor: 'red',
                paddingHorizontal: '7%', marginTop: '5%'
            }}>
                <View style={{
                    flexDirection: 'row', //backgroundColor: 'red',
                    paddingVertical: '5%', borderBottomWidth: 1,
                    borderColor: COLORS.grey707070_51,
                    justifyContent: 'space-between'
                }}>
                    <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Funds Available</Text>
                    <Text style={STYLES.fontSize19_black000000_Arial_400}>200 $</Text>
                </View>
                <View style={{
                    flexDirection: 'row', //backgroundColor: 'red',
                    paddingVertical: '5%', borderBottomWidth: 1,
                    borderColor: COLORS.grey707070_51,
                    justifyContent: 'space-between'
                }}>
                    <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Admin Balance</Text>
                    <Text style={STYLES.fontSize19_black000000_Arial_400}>100 $</Text>
                </View>
                <View style={{
                    flexDirection: 'row', //backgroundColor: 'red',
                    paddingVertical: '5%', borderBottomWidth: 1,
                    borderColor: COLORS.grey707070_51,
                    justifyContent: 'space-between'
                }}>
                    <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Expenses</Text>
                    <Text style={STYLES.fontSize19_black000000_Arial_400}>10 $</Text>
                </View>
                <View style={{
                    flexDirection: 'row', //backgroundColor: 'red',
                    paddingVertical: '5%', borderBottomWidth: 1,
                    borderColor: COLORS.grey707070_51,
                    justifyContent: 'space-between'
                }}>
                    <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Available Cash</Text>
                    <Text style={STYLES.fontSize19_black000000_Arial_400}>50 $</Text>
                </View>

            </View>
            <View style={{ flex: 0.33, }}>
                <View style={{
                    paddingHorizontal: '7%',

                }}>
                    <LastBox xml={Svgs.dollar} text="MANAGE EXPENSE" />

                </View>
            </View>
        </View>
    );
};

export default Account;