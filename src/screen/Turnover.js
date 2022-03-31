
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
const Turnover = ({ navigation }) => {
    var shopRecords = [
        {
            id: '4',

            date: '01-02-21',
            cashierName: "Cashier Name",
            productName: "product Name",
            turnOver: "100$"


        },
        {
            id: '5',
            date: '01-02-21',
            cashierName: "Cashier Name",
            productName: "product Name",
            turnOver: "100$"

        },
        {
            id: '6',
            date: '01-02-21',
            cashierName: "Cashier Name",
            productName: "product Name",
            turnOver: "100$"

        },
    ];
    return (
        <View style={STYLES.withoutpaddingcontainer}>

            <View style={[{
                flex: 0.2, backgroundColor: COLORS.green074B08,
                //justifyContent: 'center', 
                paddingLeft: '10%',

            }]}>
                <Header xml={Svgs.goBack} xml1={Svgs.dollar}
                    text="Turnover" onPress={
                        () => navigation.goBack()
                    } />

            </View>
            <View style={{
                flex: 0.66, //backgroundColor: 'red',
                // paddingHorizontal: '7%'

                alignItems: 'center',
                // justifyContent: 'center'
            }}>
                <DataTable style={{
                    marginTop: '5%',
                    //width: '95%',
                    //backgroundColor: 'red'
                }}>
                    <DataTable.Header style={{
                        borderBottomWidth: 0
                    }}>
                        <DataTable.Title style={{
                            //  backgroundColor: 'red',
                            justifyContent: 'center'
                        }}>

                            <View style={{
                                //   backgroundColor: 'green'
                            }}>
                                <Text style={[STYLES.fontSize18_074B08_Arial_Bold,
                                {
                                    // 
                                }]}>Date</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }} >
                            <Text style={STYLES.fontSize18_074B08_Arial_Bold}
                            >Cashier</Text>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }} >
                            <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Product</Text>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }} >
                            <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Turnover</Text>
                        </DataTable.Title>

                    </DataTable.Header>
                    {
                        shopRecords.map((records) => {
                            return (
                                <View key={records.id}>
                                    <DataTable.Row
                                        style={{
                                            borderBottomWidth: 0,
                                            height: 70,

                                        }} >
                                        <DataTable.Cell style={{
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.date}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{ justifyContent: 'center' }} >
                                            <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.cashierName}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{
                                            justifyContent: 'center'

                                        }}>


                                            <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.productName}</Text>

                                        </DataTable.Cell>
                                        <DataTable.Cell style={{
                                            justifyContent: 'center'

                                        }}>

                                            <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.turnOver}</Text>


                                        </DataTable.Cell>



                                    </DataTable.Row>
                                    <View style={{
                                        width: '80%',
                                        alignSelf: 'center',
                                        borderBottomWidth: 1,
                                        borderBottomColor: COLORS.grey707070_51
                                    }}></View>
                                </View>
                            )
                        })
                    }



                </DataTable>

            </View>
            <View style={{
                flex: 0.14, //backgroundColor: 'green',
                justifyContent: 'flex-end',
                paddingHorizontal: '7%'
            }}>

                <View style={{
                    marginBottom: '8%',
                    // backgroundColor: 'pink'
                }}>
                    <Button1 text="Add New turnover"
                        onPress={() => navigation.navigate("AddTurnover")} />

                </View>

            </View>
        </View >
    );
};


export default Turnover;