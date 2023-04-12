import React from 'react';
import { View } from "react-native";

export default Container = (props) => {
    
    const {style} = props;
    const defaultStyle = {
        paddingHorizontal: 15
    };

    return (
        <View style={[defaultStyle, style]}>
            {props.children}
        </View>
    );
}