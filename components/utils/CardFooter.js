import React from 'react';
import { View } from "react-native"

export default CardFooter = (props) => {
    
    const {style} = props;
    const defaultStyle = {
        flexDirection: 'row',
        padding: props.padding || props.padding === 0 ? props.padding : 10
    };
    
    return (
        <View style={[defaultStyle, style]}>
            {props.children}
        </View>
    );
}