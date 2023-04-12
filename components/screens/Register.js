import React from 'react';
import { 
	View, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Feather';
import { Wrapper, Header, Left, Right, Container, Space, H1, P, Btn, LabelIconInput } from '../utils';
import config from '../../config';

export default class Register extends React.Component {

    inputs = {};

    state = {
        name: '',
        email: '',
        password: '',
        secureEntry: true,
    }

    constructor(props) {
        super(props);
    }

    validateLogin() {}

    register() {}

    render() {
        return (
            
            <Wrapper>
                
                <Header>
                    <Left></Left>
                    <Right>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[config.style.iconBtn, {marginRight: -10}]}>
                            <P>Sign In</P>
                        </TouchableOpacity>
                    </Right>
                </Header>

                <Container>
                    <Space height={60} />
                    <H1>Sign Up!</H1>
                    <P>Register with us and start shopping</P>
                    
                    <View style={config.style.form}>

                        <LabelIconInput 
                            label={'Name'}
                            icon={'user'}
                            placeholderTextColor={'#999999'}
                            onChangeText={(text) => this.setState({password: text})}
                            placeholder={'Enter your full name'}
                            ref={ input => {
                                this.inputs['name'] = input;
                            }}
                            onSubmitEditing={() => {
                                this.focusNextField('email');
                            }}
                            underlineColorAndroid={'transparent'}
                        />

                        <LabelIconInput 
                            label={'Email'}
                            icon={'mail'}
                            placeholderTextColor={'#999999'}
                            onChangeText={(text) => this.setState({password: text})}
                            placeholder={'Enter your email'}
                            ref={ input => {
                                this.inputs['email'] = input;
                            }}
                            onSubmitEditing={() => {
                                this.focusNextField('password');
                            }}
                            underlineColorAndroid={'transparent'}
                        />

                        <LabelIconInput 
                            label={'Password'}
                            icon={'lock'}
                            placeholderTextColor={'#999999'}
                            secureTextEntry={this.state.secureEntry}
                            onChangeText={(text) => this.setState({password: text})}
                            placeholder={'Enter your password'}
                            ref={ input => {
                                this.inputs['password'] = input;
                            }}
                            onSubmitEditing={() => {
                                this.login();
                            }}
                            underlineColorAndroid={'transparent'}
                            afterInput={
                                <TouchableOpacity onPress={() => this.setState({secureEntry: !this.state.secureEntry})} style={{position: "absolute", right: 23, bottom: 7}}>
                                    <Icon name={this.state.secureEntry ? 'eye-off' : 'eye'} size={18} color={"#bcbcbc"} />
                                </TouchableOpacity>
                            }
                        />
                        
                        <Space />

                        <Btn label={'Sign Up'} onPress={() => this.register()} />

                    </View>

                </Container>
                
            </Wrapper>
            
        );
    }
}

const styles = StyleSheet.create({
    form: {
        width: '75%',
        maxWidth: 400,
        minWidth: 200,
        alignSelf: 'center'
    },
    field: {
        marginTop: 25
    },
    labelWrapper: {
        flexDirection: 'row'
    },
    labelIconWrapper: {
        width: 23
    },
    labelText: {
        color: '#a7a6b4', 
        fontSize: 13.5 
    },
    labelIcon: {

    },
    input: {
        fontWeight: "bold", 
        fontSize: 16, 
        paddingLeft: 23, 
        paddingRight: 3, 
        paddingTop: 6, 
        paddingBottom: 4, 
        borderBottomWidth: 1, 
        borderBottomColor: '#bcbcbc'
    },
    btn: {
        height: 46,
        borderRadius: 23,
        backgroundColor: '#cc2122',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        flexDirection: 'row'
    },
    btnText: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 18
    }
});