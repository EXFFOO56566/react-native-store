import React from 'react';
import config from '../../config';

export default Card = (props) => {
    
    let {style} = props;
    
    return (
        <Touchable {...props} style={[config.style.card, style]}>
            {props.children}
        </Touchable>
    );
}