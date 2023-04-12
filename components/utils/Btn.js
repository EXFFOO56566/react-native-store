import React from 'react';
import config from '../../config';

export default Btn = (props) => {

    let {style} = props;
    if(!style) {
        style = {};
    }

    let textStyle = {};

    switch(props.type) {
        case 'secondary':
            style.backgroundColor = config.secondaryColor;
            break;
        
        case 'light':
            style.backgroundColor = config.lightColor;
            break;

        case 'warning':
            style.backgroundColor = config.warningColor;
            break;

        case 'success':
            style.backgroundColor = config.successColor;
            break;

        case 'primary-outline':
            style.backgroundColor = 'transparent';
            style.borderWidth = 2;
            style.borderColor = config.primaryColor;
            textStyle.color = config.primaryColor;
            break;

        case 'secondary-outline':
            style.backgroundColor = 'transparent';
            style.borderWidth = 2;
            style.borderColor = config.secondaryColor;
            textStyle.color = config.secondaryColor;
            break;
        
        case 'light-outline':
            style.backgroundColor = 'transparent';
            style.borderWidth = 2;
            style.borderColor = config.lightColor;
            textStyle.color = config.lightColor;
            break;

        case 'warning-outline':
            style.backgroundColor = 'transparent';
            style.borderWidth = 2;
            style.borderColor = config.warningColor;
            textStyle.color = config.warningColor;
            break;

        case 'success-outline':
            style.backgroundColor = 'transparent';
            style.borderWidth = 2;
            style.borderColor = config.successColor;
            textStyle.color = config.successColor;
            break;
    }

    if(props.block === false) {
        style.alignSelf = 'flex-start';
        style.paddingHorizontal = 15;
    } else {
        style.width = '100%';
    }

    return (
        <Touchable {...props} style={[config.style.btnLg, style]}>
            <P style={[config.style.btnLgTxt, textStyle]}>{props.label}</P>
        </Touchable>
    );
}
