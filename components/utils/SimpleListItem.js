import React from 'react';
import config from "../../config";

export default SimpleListItem = (props) => {

    const {style} = props;
    const defaultStyle = {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: config.listBackgroundColor,
        borderBottomColor: config.listSeparatorColor,
        borderBottomWidth: 1
    };

    return (
        <Touchable {...props} style={[defaultStyle, style]}>
            {props.children}
        </Touchable>
    );
}