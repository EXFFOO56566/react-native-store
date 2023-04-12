import React from 'react';
import {View, Text, TextInput, FlatList, Modal, SafeAreaView} from "react-native";
import config from '../../config';
import Icon from "react-native-vector-icons/Feather";

export default class Picker extends React.Component {
    
    state = {
        isFocused: false
    };

    handleFocus = () => this.setState({isFocused: true});
    handleBlur = () => this.setState({isFocused: false});

    selectItem(item) {
        this.props.onChangeItem ? this.props.onChangeItem(item) : null;
        this.setState({isFocused: false});
    }

    _renderItem = ({item, index}) => {
        return (
            <ListItem 
                onPress={() => this.selectItem(item)}
                icon={this.props.value == item.label ? <Icon name="check" size={20} color={config.primaryColor} /> : null}
            >
                {item.icon ? item.icon : null}
                <P style={{marginBottom: 0}}>{item.label}</P>
            </ListItem>
        );

    }

    render() {
        const {label, items, ...props } = this.props;
        const {isFocused} = this.state;
        const labelStyle = {
            position: 'absolute',
            left: 0,
            top: !isFocused && (!props.value || props.value == "") ? 18 : 0,
            fontSize: !isFocused && (!props.value || props.value == "") ? 18 : 13,
            fontWeight: !isFocused && (!props.value || props.value == "") ? "bold" : "normal", 
            color: !isFocused ? '#7d7d82' : config.defaultFontColor,
            fontFamily: config.defaultFont,
            fontWeight: 'bold',
        };
        return (
            <View style={{paddingTop: 15, marginBottom: 15, width: '100%'}}>
                <Text style={labelStyle}>
                    {label}
                </Text>
                <TextInput
                    {...props}
                    onTouchStart={()=>  this.setState({isFocused: true})}
                    editable={false}
                    style={{
                    height: 35,
                    fontSize: 18,
                    color: config.defaultFontColor,
                    borderBottomWidth: 1,
                    borderBottomColor: '#c5c5c5',
                    fontWeight: 'bold',
                    fontFamily: config.defaultFont
                }}
                    ref={ input => {
                        this.input = input;
                    }}
                    textBreakStrategy={'simple'}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}/>

                <View style={{position: 'absolute', top: 20, right: 10}}>
                    <Icon name={'chevron-down'} size={20} />
                </View>

                <Modal
		        	animationType="slide"
		        	transparent={true}
                    visible={isFocused}
                    style={{backgroundColor: 'red'}}
		        >
                    <SafeAreaView style={{flex: 1, justifyContent: 'flex-end', backgroundColor: config.backgroundColor}}>
                        <FlatList 
                            ListHeaderComponent={
                                <>
                                    <Header>
                                        <Left>
                                            <IconBtn 
                                                icon={'x'}
                                                style={{marginLeft: -10}}
                                                onPress={() => this.setState({isFocused: false})}
                                            />
                                        </Left>
                                    </Header>
                                    <Container>
                                    {
                                        this.props.hideSearchBar === true ? 
                                            null : 
                                            <TextInput
                                                placeholderTextColor={'#999999'}
                                                style={config.style.formInput2}
                                                onChangeText={(text) => this.setState({q: text})}
                                                placeholder={'Search ...'}
                                                value={this.state.q}
                                                underlineColorAndroid={'transparent'}
                                            />
                                    }
                                    <Space />
                                    </Container>
                                </>
                            }
                            data={this.state.q ? items.filter((item) => {
                                return item.label.indexOf(this.state.q) !== -1
                            }) : items}
                            extraData={this.state}
                            renderItem={this._renderItem}
                        />
                    </SafeAreaView>
		        </Modal>

            </View>
        );
    }
}