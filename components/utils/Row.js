import React from 'react';
import {View} from 'react-native';

export default Row = (props) => {

    const {style} = props;
    const defaultStyle = {
        flexDirection: 'row',
        marginHorizontal: props.nomargin === true ? 0 : -10,
        flex: 1
    };
    
    return (
        <View style={[defaultStyle, style]}>{props.children}</View>
    );
}