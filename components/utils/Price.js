import React from 'react';
import {View} from 'react-native';

export default Price = (props) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {
                props.specialPrice ?
                    <>
                        <P style={props.style || {}}>{props.specialPrice}</P>
                        <SupSm style={{textDecorationLine: 'line-through'}}>{" " + props.price}</SupSm>
                    </> : 
                    <P style={props.style || {}}>{props.price}</P>
            }
        </View>
    );
}