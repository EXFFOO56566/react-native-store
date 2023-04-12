import React from 'react';
import {Text} from 'react-native';
import config from '../../config';

export default H1 = (props) => {
    
    const {style} = props;
    const defaultStyle = {
        fontFamily: config.headingFont,
        fontSize: config.defaultFontSize*2,
        marginBottom: 15,
        color: config.defaultFontColor
    };

    return (
        <Text style={[defaultStyle, style]}>{props.children}</Text>
    );
}