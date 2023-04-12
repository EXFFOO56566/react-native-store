import React from 'react';
import {
	ScrollView,
	StatusBar,
	StyleSheet,
	Image,
	Share,
	Dimensions,
	Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Feather';
import config from '../../config';
import { Header, Wrapper, Left, Right, Container, Row, Space, ListItem, P, H3, Sm, Price, StarRating, Btn, IconBtn } from '../utils';
import Carousel from 'react-native-snap-carousel';
import sample_data from '../../sample_data';
const {height, width} = Dimensions.get('window');


export default class ProductDetail extends React.Component {

	state = {
		favoriteLoading: false,
		selectedFilters: {}
	};

	constructor(props) {
		super(props);
		this.state.product = this.props.route.params.product;
	}

	addToCart() {}

	shareProduct() {
		
		Share.share({
			message: "Share Product (Message)",
			title: "Share Product (Tittle)"
		});
	}
    
	_renderGalleryItem = (imageUrl) => {
		return (
			<Image 
				source={{uri: imageUrl.item}}
				style={styles.image} 
			/>
		);
	}

	renderLayout2() {

		return (
			<>
			<StatusBar color={config.primaryColor} barStyle={config.layoutMode == 'dark' ? 'light-content' : 'dark-content'} />
			<ScrollView style={{flex: 1}} style={{backgroundColor: config.backgroundColor}}>
				{
					this.state.product.images && this.state.product.images.length > 0 ? 
					<Carousel
						ref={(c) => { this._carousel = c; }}
						data={this.state.product.images}
						renderItem={this._renderGalleryItem}
						sliderWidth={width}
						itemWidth={(width)}
					/>
						: 
					<Image 
						source={require('../../assets/img/placeholder_image-new.png')}
						style={styles.image} 
					/>
				}

				<Container style={{position: 'absolute', top: Platform.OS == 'ios' ? 40 : 10, left: 0, width: '98%'}}>
					<Row>
						<Left>
							<IconBtn 
								icon={global.backIcon} 
								onPress={() => this.props.navigation.goBack()} 
							/>
						</Left>
						<Right>
							<IconBtn 
								icon={'share-2'}
								onPress={() => this.shareProduct()}
							/>
							<IconBtn 
								icon={'shopping-cart'}
								onPress={() => this.props.navigation.navigate('Cart')}
								badge={2}
							/>
						</Right>
					</Row>
				</Container>

				<Space />

                <Container>
					<Row nomargin={true}>
						<Left>
							<Sm style={{ fontWeight: 'bold', color: '#cccccc' }}>{this.state.product.sku.toUpperCase()}</Sm>
						</Left>
						<Right>
							<Sm style={{ color: '#00b0ed', fontWeight: 'bold' }}>{this.state.product.brand_name}</Sm>
						</Right>
					</Row>
					<H3 style={{marginBottom: 10}}>{this.state.product.name}</H3>
				</Container>

				<Container>
					
					<Row nomargin={true}>
						<Left flexDirection={'column'}>
							<StarRating rating={this.state.product.rating} />
							<P style={{color: 'green'}}>In Stock</P>
						</Left>
						<Right>
							<Price 
								style={{ color: '#c30000', fontWeight: 'bold', fontSize: 24 }} 
								price={this.state.product.price} 
								specialPrice={this.state.product.special_price} 
							/>
						</Right>
					</Row>
					
					<Space />

					<H4>Colors</H4>

					<SelectableList 
						onSelect={(item) => this.setState(
							{selectedFilters: 
								{
									...this.state.selectedFilters, 
									...{color: item.id}
								}
							}
						)}
						isSelected={(item) => this.state.selectedFilters.color == item.id}
						items={sample_data.filters.colors}
					/>

					<Space />

					<Btn label={'ADD TO CART'} />

					<Space />

					<ListItem 
						icon={<Icon name={global.nextIcon} color={config.defaultFontColor} size={18} />} 
						onPress={
							() => this.props.navigation.navigate(
								'WebViewContent', {
									heading: 'Description', 
									content: this.state.product.description
									}
								)
							}>
						<P style={{marginBottom: 0}}>Description</P>
					</ListItem>

					<ListItem 
						icon={<Icon name={global.nextIcon} color={config.defaultFontColor} size={18} />} 
						onPress={
							() => this.props.navigation.navigate(
								'WebViewContent', {
										heading: 'Description', 
										content: this.state.product.description
									}
								)
							}>
						<P style={{marginBottom: 0}}>Specification</P>
					</ListItem>

				</Container>

			</ScrollView>
			</>
		);
	}

	renderLayout1() {

		return (

			<Wrapper>
				<Header>
					<Left>
						<IconBtn 
							icon={global.backIcon} 
							onPress={() => this.props.navigation.goBack()}
							style={{marginLeft: -10}}
						/>
					</Left>
					<Right>
						<IconBtn 
							icon={'share-2'}
							onPress={() => this.shareProduct()}
						/>
						<IconBtn 
							icon={'shopping-cart'}
							onPress={() => this.props.navigation.navigate('Cart')}
							badge={2}
						/>
					</Right>
				</Header>
	
				<Container>
					<H3 style={{marginBottom: 10}}>{this.state.product.name}</H3>
					<Row nomargin={true}>
						<Left>
							<Sm style={{ fontWeight: 'bold', color: '#cccccc' }}>{this.state.product.sku.toUpperCase()}</Sm>
						</Left>
						<Right>
							<Sm style={{ color: '#00b0ed', fontWeight: 'bold' }}>{this.state.product.brand_name}</Sm>
						</Right>
					</Row>
					<Space />
				</Container>

				{
						this.state.product.images && this.state.product.images.length > 0 ? 
						<Carousel
							ref={(c) => { this._carousel = c; }}
							data={this.state.product.images}
							renderItem={this._renderGalleryItem}
							sliderWidth={width}
							itemWidth={(width)}
						/>
						 : 
						<Image 
							source={require('../../assets/img/placeholder_image-new.png')}
							style={styles.image} 
						/>
				}
					
				<Container>
					
					<Space />

					<Row nomargin={true}>
						<Left flexDirection={'column'}>
							<StarRating rating={this.state.product.rating} />
							<P style={{color: 'green'}}>In Stock</P>
						</Left>
						<Right>
							<Price 
								style={{ color: '#c30000', fontWeight: 'bold', fontSize: 24 }} 
								price={this.state.product.price} 
								specialPrice={this.state.product.special_price} 
							/>
						</Right>
					</Row>
					
					<Space />

					<ListItem 
						icon={<Icon name={global.nextIcon} color={config.defaultFontColor} size={18} />} 
						onPress={
							() => this.props.navigation.navigate(
								'WebViewContent', {
									heading: 'Description', 
									content: this.state.product.description
									}
								)
							}>
						<P style={{marginBottom: 0}}>Description</P>
					</ListItem>

					<ListItem 
						icon={<Icon name={global.nextIcon} color={config.defaultFontColor} size={18} />} 
						onPress={
							() => this.props.navigation.navigate(
								'WebViewContent', {
									heading: 'Description', 
									content: this.state.product.description
									}
								)
							}>
						<P style={{marginBottom: 0}}>Specification</P>
					</ListItem>

					<Space />

					<Btn label={'ADD TO CART'} />

				</Container>
			</Wrapper>
		);
	}
	
	render() {
		return (
			config.productDetailLayout == 'layout2' ? this.renderLayout1() : this.renderLayout2()
		);
	}

}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: (height/2) - 40,
		resizeMode: 'cover'
	},
	skuLine: {
		flexDirection: 'row'
	},
	skuLeft: {
		flex: 0.5
	},
	skuRight: {
		flex: 0.5,
		alignItems: 'flex-end'
	},
	iconButton: {
		height: 40, 
		width: 40, 
		backgroundColor: 'pink', 
		borderRadius: 20, 
		alignItems: 'center', 
		justifyContent: 'center',
		shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1
	}
	
});