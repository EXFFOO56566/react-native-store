import React from 'react';
import {
	View,
} from 'react-native';

import config from '../../config';
import { Wrapper, Left, Container, Header, ListItem, Space, H1, P, Btn, IconBtn } from '../utils';
import Icon from 'react-native-vector-icons/dist/Feather';

export default class Settings extends React.Component {

	state = {};

	render() {

		return (
			
			<Wrapper>
				<Header>
					<Left>
						<IconBtn icon={global.backIcon} 
							onPress={() => this.props.navigation.goBack()} 
							style={{marginLeft: -10}} 
						/>
					</Left>
				</Header>

				<Container>

					<H1>Settings</H1>

                    <View style={{alignItems: 'center'}}>
                        <Icon name={'user'} size={100} color={'#444444'} />
                        <P>Simbanda Ridly</P>
                    </View>

                    <Space />

					<ListItem icon={<Icon name={global.nextIcon} color={config.defaultFontColor} size={18} />} onPress={() => this.props.navigation.navigate('EditProfile')}>
                        <P style={{marginBottom: 0}}>Edit Profile</P>
                    </ListItem>

                    <ListItem icon={<Icon name={global.nextIcon} color={config.defaultFontColor} size={18} />} onPress={() => this.props.navigation.navigate('OrderHistory')}>
                        <P style={{marginBottom: 0}}>Transaction History</P>
                    </ListItem>

                    <ListItem icon={<Icon name={global.nextIcon} color={config.defaultFontColor} size={18} />} onPress={() => this.props.navigation.navigate('Login')}>
                        <P style={{marginBottom: 0}}>Login</P>
                    </ListItem>

                    <Space />

                    <Btn label={'Logout'} type={'light'} />

				</Container>
			</Wrapper>

		);
	}
}