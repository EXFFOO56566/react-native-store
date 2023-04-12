import React from 'react';
import {Text} from 'react-native';
import config from '../../config';

export default H4 = (props) => {
    
    const {style} = props;
    const defaultStyle = {
        fontFamily: config.headingFont,
        fontSize: config.defaultFontSize*1.25,
        marginBottom: 10,
        color: config.defaultFontColor
    };

    return (
        <Text style={[defaultStyle, style]}>{props.children}</Text>
    );
}