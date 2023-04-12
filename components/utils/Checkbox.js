import React from 'react';
import config from '../../config';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';

export default Checkbox = (props) => {

    return (
        <Touchable onPress={() => props.onPress()}>
            <IonIcon name={props.selected ? 'checkbox' : 'square-outline'} size={24} color={props.selected ? config.primaryColor : '#333'} />
        </Touchable>
    );
}