import React from 'react';
import {View} from 'react-native';

export default Right = (props) => {
    return (
        <View style={{
            justifyContent: 'flex-end', 
            flex: props.flex || 0.5, 
            flexDirection: 'row',
            alignItems: 'center'
        }}>{props.children}</View>
    );
}
