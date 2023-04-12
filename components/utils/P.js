import React from 'react';
import {Text} from 'react-native';
import config from '../../config';

export default P = (props) => {
    
    const {style} = props;
    const defaultStyle = {
        fontFamily: props.bold ? config.headingFont : config.defaultFont,
        fontSize: config.defaultFontSize,
        marginBottom: props.nomargin === true ? 0 : 3,
        color: config.defaultFontColor
    };

    return (
        <Text style={[defaultStyle, style]}>{props.children}</Text>
    );
}