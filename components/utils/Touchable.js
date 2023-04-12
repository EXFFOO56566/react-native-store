import React from 'react';
import {TouchableOpacity} from 'react-native';

export default Touchable = (props) => {

    return (
        <TouchableOpacity {...props}>
            {props.children}
        </TouchableOpacity>
    );


}