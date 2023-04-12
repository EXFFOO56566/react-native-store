import React from 'react';
import {View} from 'react-native';

export default Center = (props) => {
    return (
        <View style={{
            justifyContent: 'center', 
            alignItems: 'center',
            flex: props.flex || 1, 
            flexDirection: props.flexDirection || 'row'
        }}>{props.children}</View>
    );
}