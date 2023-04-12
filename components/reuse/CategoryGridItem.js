import React from 'react';
import { Card, CardImage, CardFooter } from '../utils';

export const CategoryGridItem = (props) => {

    return (
        <Card style={[
            {padding: 10, alignItems: 'center', justifyContent: 'center'}, 
            props.style
        ]} onPress={() => props.onPress()}>
			<CardImage source={{uri: props.item.image}} style={props.imageStyle} />
            <CardFooter style={{alignItems: 'center', justifyContent: 'center'}}>
                <P nomargin={true} bold={true} style={{marginTop: 5}}>{props.item.name}</P>
            </CardFooter>
		</Card>
    );
    
}