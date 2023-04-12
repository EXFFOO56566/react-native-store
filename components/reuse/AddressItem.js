import React from 'react';
import {
	View
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons';
import config from '../../config';
import { ListItem, P, Sm } from '../utils';

export const AddressItem = (props) => {

    return (
        <ListItem onPress={() => props.onPress(props.item)}>
            <Icon name={props.selected ? 'checkbox' : 'square-outline'} size={24} color={props.selected ? config.primaryColor : '#333'} />
            <View style={{marginLeft: 10}}>
                <P style={{fontWeight: 'bold'}}>{props.item.name}</P>
                <Sm style={{marginBottom: 0}}>{props.item.address}</Sm>
            </View>
        </ListItem>
    );
	
}