import React from 'react';
import config from '../../config';
import {View} from 'react-native';
import Icon from "react-native-vector-icons/Feather";

export default IconBtn = (props) => {
    const {onPress, style, icon, color, badge, size} = props;
    return (
        <View>
            <View style={{alignSelf: 'flex-start'}}>
                <Touchable onPress={() => onPress()} style={[config.style.iconBtn, style || {}]}>
                    <Icon name={icon} size={size || 22} color={color || config.defaultFontColor} />
                    {
                        badge ? 
                            <View style={{
                                position: 'absolute', 
                                top: -5, 
                                right: -5, 
                                backgroundColor: config.badgeColor, 
                                borderRadius: 9, 
                                height: 18, 
                                width: 18, 
                                alignItems: 'center', 
                                justifyContent: 'center'
                            }}>
                                <SupSm style={{color: config.badgeTextColor}}>{badge}</SupSm>
                            </View> : 
                        null
                    }
                </Touchable>
            </View>
        </View>
    );
}