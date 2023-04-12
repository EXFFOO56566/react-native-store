import React from 'react';
import {
	StyleSheet,
	View,
	FlatList
} from 'react-native';

import config from '../../config';
import { Wrapper, Left, Container, Header, Separator, SimpleListItem, Row, Column, Space, H1, P, Sm, H4, IconBtn } from '../utils';
import Icon from 'react-native-vector-icons/dist/Feather';

export default class OrderDetail extends React.Component {

	state = {};
	
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
    
    constructor(props) {
		super(props);
		this.state.order = this.props.route.params.order || {};
	}
	
	_renderItem = ({item}) => (

		<Row nomargin={true}>
			<Column flex={0.6}>
				<P style={{fontWeight: 'bold'}}>{item.name}</P>
				<Sm>{item.sku}</Sm>
				<Sm>{item.rate + ' x ' + item.qty}</Sm>
			</Column>

			<Column flex={.4} align={'flex-end'}>
				<P>{item.total}</P>
			</Column>
		</Row>
	);

	render() {

		const {order} = this.state;

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

					<H1>Order # {order.order_no}</H1>

					<SimpleListItem>
						<Row>
							<Column flex={0.5}>
								<P style={{ color: config.primaryColor }}>{'Order # ' + order.order_no}</P>
								<Sm style={{ marginBottom: 0 }}>{order.date}</Sm>
							</Column>
							<Column flex={0.5} align={'flex-end'}>
								<P style={{ fontWeight: 'bold' }}>{order.total}</P>
								<View style={{flexDirection: 'row'}}>
									{this.getStatusIcon(order.status)}
									<Sm style={{ color: '#888888' }}>{' ' + order.statusLabel}</Sm>
								</View>
							</Column>
						</Row>
					</SimpleListItem>

					<Space />

					<FlatList
						data={order.lines || []}
						extraData={this.state}
						keyExtractor={this._keyExtractor}
						renderItem={this._renderItem}
						ItemSeparatorComponent={
							() => 
							<View>
								<Space height={10} />
								<Separator color={'#cccccc'} />
								<Space height={10} />
							</View>
						}
					/>

					<Space height={10} />
					<Separator color={'#cccccc'} />

					<Space />
					
					<H4 style={{paddingHorizontal: 10}}>Summary</H4>

					<Row nomargin={true}>
						<Column>
							<Sm>Subtotal</Sm>
						</Column>
						<Column align={'flex-end'}>
							<Sm>{order.summary.subtotal}</Sm>
						</Column>
					</Row>

					<Space height={3} />

					<Row nomargin={true}>
						<Column>
							<Sm>Tax Total</Sm>
						</Column>
						<Column align={'flex-end'}>
							<Sm>{order.summary.taxtotal}</Sm>
						</Column>
					</Row>

					<Space height={3} />

					<Row nomargin={true}>
						<Column>
							<Sm>Shipping</Sm>
						</Column>
						<Column align={'flex-end'}>
							<Sm>{order.summary.shippingtotal}</Sm>
						</Column>
					</Row>

					<Space height={3} />

					<Row nomargin={true}>
						<Column>
							<P>Total</P>
						</Column>
						<Column align={'flex-end'}>
							<H4>{order.summary.total}</H4>
						</Column>
					</Row>

				</Container>
			</Wrapper>

		);
	}
}

const styles = StyleSheet.create({
	header: config.headerStyle,
	headerHeading: config.headerFontStyle,
	headerLeft: {
		flex: 0.6,
	    height: 60,
	    justifyContent: 'center'
	},
	headerRight: {
		flex: 0.4,
		alignItems: 'flex-end',
	    height: 60,
	    justifyContent: 'center'
	},
	orderItemCard: {
		backgroundColor: '#ffffff',
		shadowColor: "#222222",
	    shadowOffset: {
	        width: 0,
	        height: 1,
	    },
	    shadowOpacity: 0.18,
	    shadowRadius: 1.00,
	    elevation: 1,
	    marginBottom: 7
	},
	separator: {
		paddingHorizontal: 15,
		paddingVertical: 7,
		backgroundColor: '#eeeeee'
	},
	tr: {
		flexDirection: 'row',
		paddingVertical: 8,
		paddingHorizontal: 15
	},
	tdLeft: {
		flex: 0.5
	},
	tdRight: {
		flex: 0.5,
		alignItems: 'flex-end'
	},
	summaryText: {
		fontSize: 14,
		color: '#444444'
	},
	totalText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#000000'
	},
    btnTransparent: {
    	height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    	marginTop: 15
    },
    btnTextDark: {
        fontWeight: 'bold',
        color: '#cccccc',
        fontSize: 16
    }
});