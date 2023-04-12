import React from 'react';
import {View} from 'react-native';

export default Column = (props) => {
    
    const {style} = props;
    const defaultStyle = {
        flex: props.flex || 1,
        alignItems: props.align || 'flex-start',
        paddingHorizontal: props.nopadding === true ? 0 : 10
    };

    return (
        <View style={[defaultStyle, style]}>{props.children}</View>
    );
}