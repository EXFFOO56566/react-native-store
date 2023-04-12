import React from 'react';
import {
	View, 
	FlatList,
	StyleSheet,
	TextInput,
	Image,
	Dimensions,
	TouchableOpacity
} from 'react-native';

import ProductGridItem from '../reuse/ProductGridItem';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Carousel from 'react-native-snap-carousel';

import config from '../../config';
import style from '../../style';
import sample_data from '../../sample_data';
import { Wrapper, Header, Left, Right, Container, Space, ImageCard, H4, IconBtn } from '../utils';

const {width} = Dimensions.get('window');

export default class Home extends React.Component {

	_keyExtractor = (item, index) => item.id;
	_keyCategoryExtractor = (item, index) => item.id;
	
	state = {
		loaderText: '',
		cartLoading: false,
		showOutOfStockModal: false,
		outOfStockMessage: '',
		categories: [],
		brands: [],
		featuredProducts: [],
		favoriteProducts: []
	};

	goToProduct(item) {
		this.props.navigation.navigate('ProductDetail', {product: item});
	}

	goToCategory(item) {
		this.props.navigation.navigate('CategoryListing', {heading: item.name, categoryPath: item.fullurl});
    }
    
    addToCart() {
        console.log('add to cart')
    }

	_renderItem = ({item, index}) => (
	    <ProductGridItem
	    	key={item.id}
	    	onPress={this.goToProduct.bind(this)}
	    	addToCart={this.addToCart.bind(this)}
			item={item}
			cartInProgressItems={this.props.cartInProgressItems}
			showMessage={true}
			showCartBtn={true}
			style={{maxWidth: width/3, flex: 0.33}}
			layout={2}
	    />
    );
    
    _renderItem2 = ({item, index}) => (
	    <ProductGridItem
	    	key={item.id}
	    	onPress={this.goToProduct.bind(this)}
	    	addToCart={this.addToCart.bind(this)}
			item={item}
			cartInProgressItems={this.props.cartInProgressItems}
			showMessage={true}
			showCartBtn={true}
			style={{maxWidth: width/2, flex: 0.5}}
			layout={1}
	    />
    );
    
    

	_renderBrandItem = ({item}) => {
		const col = 4;
		return (
			<ImageCard
				margin={5}
				padding={15}
				imageWidth={((width-15)/col) - 42}
				onPress={() => this.props.navigation.navigate('Shop')} 
				source={{uri: item.image}} 
			/>
		)
	}

	doSearch() {
		if(this.state.q == "" || !this.state.q) {
			return;
		}
        
        console.log('search ...');
	}

	_renderCarouselItem = ({item, index}) => {
		return (
            <TouchableOpacity style={config.style.cardShadow}>
                <Image source={{uri: item.image}} style={{width: '100%', height: 180, resizeMode: 'cover', borderRadius: 8, overflow: 'hidden'}} />
            </TouchableOpacity>
        );
	}

	render() {

		return (
			<Wrapper>
				
				<Header style={{marginBottom: 20}}>
					<Left flex={0.9}>
						<View style={[config.style.formField, {marginBottom: 0, flex: 1}]}>
							<View>
								
								<TextInput
									placeholderTextColor={'#999999'}
									style={config.style.formInput2}
									onChangeText={(text) => this.setState({q: text})}
									placeholder={'Search products'}
									value={this.state.q}
									onSubmitEditing={() => {
										this.doSearch();
									}}
									underlineColorAndroid={'transparent'}
								/>

								<TouchableOpacity onPress={() => this.doSearch()} style={{position: "absolute", right: 15, bottom: 11}}>
									<Icon name={'magnifier'} size={18} color={"#bcbcbc"} />
								</TouchableOpacity>

							</View>
						</View>
					</Left>
					<Right flex={0.1}>
						<IconBtn
							icon={'shopping-cart'} 
							onPress={() => this.props.navigation.navigate('Cart')}
							badge={2}
						/>
					</Right>
				</Header>

				<Container>
										
					<Carousel
						data={sample_data.homeBanner}
						renderItem={this._renderCarouselItem}
						sliderWidth={(width-30)}
						itemWidth={(width-30)}
					/>

					<Space />

					<FlatList
						contentContainerStyle={{marginHorizontal: -5}}
						data={sample_data.brands}
						extraData={this.state}
						horizontal={true}
						keyExtractor={this._keyCategoryExtractor}
						renderItem={this._renderBrandItem}
						showsHorizontalScrollIndicator={false}
						key={'brands'}
					/>

					<Space />

					<H4>Featured Items</H4>

					<Carousel
						ref={(c) => { this._carousel = c; }}
						data={sample_data.items}
						renderItem={this._renderItem}
						sliderWidth={(width-30)}
						itemWidth={(width-30)*0.33}
					/>

					<Space />

                    <H4>Favorite Items</H4>

                    <Carousel
                        data={sample_data.items}
                        renderItem={this._renderItem2}
                        sliderWidth={(width-30)}
                        itemWidth={(width-30)*0.5}
                    />
					
				</Container>
			</Wrapper>

		);
	}

}

const styles = StyleSheet.create(style.home);
