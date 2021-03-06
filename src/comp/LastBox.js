import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import STYLES from '../STYLES';

const LastBox = props => {
    return (
        <View style={{
            borderWidth: 1,
            alignItems: 'center',
            borderColor: COLORS.green074B08, paddingHorizontal: '5%',
            paddingVertical: '7%'
        }}>
            <View style={{
                backgroundColor: COLORS.green074B08,
                borderRadius: 10, paddingHorizontal: '5%',
                paddingVertical: '5%', alignItems: 'center'
            }}>
                <SvgXml xml={props.xml} />
            </View>
            <Text style={[STYLES.fontSize18_grey1C1939_Arial_400,
            { marginTop: '5%', textAlign: 'center' }]}>{props.text}</Text>
        </View>
    );
};

LastBox.propTypes = {

};

export default LastBox;