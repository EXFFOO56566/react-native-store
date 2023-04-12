import { View } from "react-native"
import React from 'react';

export default Header = (props) => {

    const {style} = props;
    const defaultStyle = {
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginBottom: 15
    };

    return (
        <View style={[defaultStyle, style]}>
            {props.children}
        </View>
    );
}