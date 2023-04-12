import React from 'react';
import config from "../../config";

export default ListItem = (props) => {

    const {style, icon} = props;
    const defaultStyle = {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: config.listBackgroundColor,
        borderBottomColor: config.listSeparatorColor,
        borderBottomWidth: 1
    };

    return (
        <Touchable {...props} style={[defaultStyle, style]}>
            <Row>
                <Left flex={0.8}>
                    {props.children}
                </Left>
                <Right flex={0.2}>
                    {icon}
                </Right>
            </Row>
        </Touchable>
    );
}