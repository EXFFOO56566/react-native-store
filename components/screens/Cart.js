import React from 'react';
import {
	View,
	FlatList,
	StyleSheet,
	Image
} from 'react-native';

import {CartItem} from '../reuse/CartItem';
import { Wrapper, Header, Left, Container, Right, Space, Row, Column, Touchable, H1, P, H4, Footer, Sm, Center, Btn, IconBtn } from '../utils';
import sample_data from '../../sample_data';
import config from '../../config';


export default class Cart extends React.Component {

	state = {
		_showQuantityModal: false,
		curItem: {},
		curItemQty: 0,
		cart: sample_data.cart,
		cartInProgressItems: []
	}

	cartHasItems() {
		return this.state.cart && this.state.cart.lines !== undefined && this.state.cart.lines.length > 0;
	}

	showQuantityModal(item) {}

	updateItemQty(item, qty, increment = false) {}

	deleteItem(lineId, item) {}

	checkout() {
		this.props.navigation.navigate('Address')
	}

	updateCartData(response) {}

	_keyExtractor = (item, index) => item.internalid;

	_renderItem = ({item}) => (
	    <CartItem
	    	key={item.internalid}
	    	deleteItem={this.deleteItem.bind(this)}
	    	updateItemQty={this.updateItemQty.bind(this)}
	    	showQuantityModal={this.showQuantityModal.bind(this)}
			item={item}
			style={{marginHorizontal: 2}}
	    />
	);

	_renderNoItems() {
		return (
			<Center flexDirection={'column'}>
				
				<Space />

				<Image 
					source={require('../../assets/img/empty-cart.png')} 
					style={{width: 200, height: 200, resizeMode: 'cover'}}
				/>
				
				<H3>Oops!</H3>
				<Sm>Your cart is empty</Sm>
				<Space />
				<Btn label={'Continue Shopping'} />

			</Center>
		);
	}

	_renderCartContent() {

		const {cart} = this.state;

		return (
			
			<View>
				
				<FlatList
					key={"cart-item"}
			        data={cart.lines}
			        extraData={this.state}
			        keyExtractor={this._keyExtractor}
			        renderItem={this._renderItem}
		      	/>

				<Space height={10} />

				<Row>
					<Column>
						<P>Subtotal</P>
					</Column>
					<Column align={'flex-end'}>
						<P>{cart.summary.subtotal}</P>
					</Column>
				</Row>

				<Space height={3} />

				<Row>
					<Column>
						<P>Tax Total</P>
					</Column>
					<Column align={'flex-end'}>
						<P>{cart.summary.taxtotal}</P>
					</Column>
				</Row>

				<Space height={3} />

				<Row>
					<Column>
						<P>Shipping</P>
					</Column>
					<Column align={'flex-end'}>
						<P>{cart.summary.estimatedshipping}</P>
					</Column>
				</Row>

				<Space height={3} />

				<Row>
					<Column>
						<P bold={true}>Total</P>
					</Column>
					<Column align={'flex-end'}>
						<H4>{cart.summary.total}</H4>
					</Column>
				</Row>
			    
				<Space />

	    	</View>
		);
	}

	_renderContent() {}

	render() {

		const footer = (
			<Footer>
				<Btn 
					label={'Checkout'}
					onPress={() => this.checkout()}
				/>
			</Footer>
		);

		return (

			<Wrapper footer={this.cartHasItems() ? footer : null}>
				<Header>
					<Left>
						<IconBtn icon={global.backIcon} 
							onPress={() => this.props.navigation.goBack()} 
							style={{marginLeft: -10}} 
						/>
					</Left>
					<Right>
						<Touchable onPress={() => this.checkout()} style={config.style.iconBtn}>
							<P>Checkout</P>
						</Touchable>
					</Right>
				</Header>
				<Container>
					<H1>Cart</H1>
					{this.cartHasItems() ? this._renderCartContent() : this._renderNoItems()}
				</Container>
			</Wrapper>
		);
	}
}

const styles = StyleSheet.create({
	noItemsWrapper: {
    	justifyContent: 'center',
    	alignItems: 'center',
    	flex: 1
    },
    noItemsHeading: {
    	color: '#444444',
    	fontSize: 20,
    	marginTop: 10,
    },
    noItemsText: {
    	color: '#666666',
    	marginTop: 10,
    	marginBottom: 15
    }
});