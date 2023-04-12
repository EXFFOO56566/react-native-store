import { SafeAreaView, ScrollView} from "react-native"
import React from 'react';
import { StatusBar } from 'react-native';
import config from '../../config';

export default Wrapper = (props) => {
    
    const {style} = props;
    const defaultStyle = {
        backgroundColor: config.backgroundColor,
        flex: 1,
        paddingTop: 5
    };


    return (
        <>
            <StatusBar color={config.primaryColor} barStyle={config.layoutMode == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView {...props} style={[defaultStyle, style]}>
                <ScrollView style={{flex: 1}}>
                    {props.children}
                </ScrollView>
                {props.footer}
            </SafeAreaView>
        </>
    );
}