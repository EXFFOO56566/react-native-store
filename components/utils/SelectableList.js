import React from 'react';
import {View} from 'react-native';
import config from "../../config";

export default SelectableList = (props) => {

    const {wrapperStyle, itemStyle} = props;

    const defaultWrapperStyle = {
        flexDirection: 'row',
        marginHorizontal: -5,
        flexWrap: 'wrap'
    };

    const defaultItemStyle = {
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: config.defaultFontColor,
        padding: 8,
        marginBottom: 8,
        borderRadius: config.defaultBorderRadius
    };

    const defaultSelectedStyle = {
        borderColor: config.primaryColor
    }

    return (
        <View style={[defaultWrapperStyle, wrapperStyle]}>
            {
                props.items.map((item) => {
                    return (
                        <Touchable 
                            onPress={() => props.onSelect(item)} 
                            style={[
                                defaultItemStyle, 
                                itemStyle, 
                                typeof props.isSelected == "function" && props.isSelected(item) ? defaultSelectedStyle : {}  
                            ]}>
                            <P style={{marginBottom: 0}}>{item.label}</P>
                        </Touchable>
                    )
                })
            }
        </View>
    );
}