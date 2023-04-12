import React from 'react';
import {
    Image
} from 'react-native';
import config from '../../config';

export default ImageCard = (props) => {

    const defaultImageStyle = {
        resizeMode: 'contain', 
        borderRadius: config.defaultBorderRadius
    };
    
    if(props.imageWidth) {
        defaultImageStyle.width = props.imageWidth;
        defaultImageStyle.height = props.imageWidth;
    }

    if(props.imageHeight) {
        defaultImageStyle.height = props.imageHeight;
    }
    
    const defaultCardStyle = {
        alignItems: 'center',
        justifyContent: 'center'
    };

    if(props.margin !== undefined) {
        defaultCardStyle.margin = props.margin;
    }

    if(props.padding !== undefined) {
        defaultCardStyle.padding = props.padding;
    }

    return (
        <Card onPress={() => props.onPress()} style={[defaultCardStyle, props.cardStyle]}>
			<Image source={props.source} style={[defaultImageStyle, props.imageStyle]} />
		</Card>
    );
    
}