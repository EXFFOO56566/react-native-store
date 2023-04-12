import React from 'react';
import {
    View,
    FlatList
} from 'react-native';

import { Wrapper, Left, Container, Header, Row, Column, SimpleListItem, H1, P, Sm, IconBtn } from '../utils';
import Icon from 'react-native-vector-icons/dist/Feather';
import sample_data from '../../sample_data';
import config from '../../config';

export default class OrderHistory extends React.Component {

    state = {};

    _keyExtractor = (item, index) => item.id;

    getStatusColor(statusCode) {
		const colors = {
			'billed': '#4aa753',
			'cancelled': '#c30000'			
		}

		return colors[statusCode] || '#177ff7';
	}

	getStatusIcon(statusCode) {
		
		const icons = {
			billed: 'truck',
			cancelled: 'x-square'
		};

		return (
			<Icon name={icons[statusCode] || 'circle'} color={'#888888'} size={12} />
		);
	}
    
    _renderItem = ({item}) => (
	    <SimpleListItem onPress={() => this.props.navigation.navigate('OrderDetail', {order: item})}>
            <Row>
                <Column flex={0.5}>
                    <P style={{ color: config.primaryColor }}>{'Order # ' + item.order_no}</P>
					<Sm style={{ color: '#888888', marginBottom: 0 }}>{item.date}</Sm>
                </Column>
                <Column flex={0.5} align={'flex-end'}>
                    <P style={{ fontWeight: 'bold' }}>{item.total}</P>
					<View style={{flexDirection: 'row'}}>
						{this.getStatusIcon(item.status)}
						<Sm style={{ color: '#888888' }}>{' ' + item.statusLabel}</Sm>
					</View>
                </Column>
            </Row>
		</SimpleListItem>
	);

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

					<H1>Order History</H1>

					<FlatList
                        data={sample_data.orders}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />

				</Container>
			</Wrapper>

		);
	}
}