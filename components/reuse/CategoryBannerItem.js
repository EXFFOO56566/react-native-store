import React from 'react';
import {
    Dimensions,
    View
} from 'react-native';
import { ImageCard, P } from '../utils';
const {width} = Dimensions.get('window');

export const CategoryBannerItem = (props) => {

    const titleStyle = {
        position: 'absolute', top: '45.5%', fontWeight: 'bold', fontSize: 20
    };

    if(props.titlePosition == 'left') {
        titleStyle.left = 15;
    } else {
        titleStyle.right = 15
    }

    return (
        <View>
            <ImageCard 
                imageStyle={{resizeMode: 'cover'}}
                onPress={() => props.onPress(props.item)} 
                source={{uri: props.item.banner_image}} 
                imageWidth={props.bannerWidth || '100%'} 
                imageHeight={props.bannerHeight || width/3}
            />
            {props.hideTitle ? null : <P style={titleStyle}>{props.item.name}</P>}
        </View>
    );
}