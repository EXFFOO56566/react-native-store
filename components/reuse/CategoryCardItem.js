import React from 'react';
import { Card, CardImage, CardFooter } from '../utils';

export const CategoryCardItem = (props) => {

    return (
        <Card style={props.style} onPress={() => props.onPress()}>
			<CardImage source={{uri: props.item.image}} style={props.imageStyle} />
            <CardFooter style={{alignItems: 'center', justifyContent: 'center'}}>
                <P nomargin={true} bold={true}>{props.item.name}</P>
            </CardFooter>
		</Card>
    );
    
}