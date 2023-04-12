import React from 'react';
import {View, Text, TextInput} from "react-native";
import config from '../../config';
import Icon from "react-native-vector-icons/Feather";

export default LabelIconInput = (props) => {

    const {label, icon, afterInput} = props;

    return (
        <View style={config.style.formField}>
            <View style={config.style.labelWrapper}>
                <View style={config.style.labelIconWrapper}>
                    <Icon name={icon} color={config.primaryColor} size={15} />
                </View>
                <View>
                    <Text style={config.style.labelText}>{label}</Text>
                </View>
            </View>
            <View>
                <TextInput {...props} style={[config.style.formInput, props.style]} textBreakStrategy={'simple'} />
                {afterInput}
            </View>
        </View>
    );

}