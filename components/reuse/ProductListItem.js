import React from 'react';
import {
	View, 
	Image,
	StyleSheet,
	Dimensions,
} from 'react-native';

import { Card, Space, Row, Column, Sm, Touchable, Price, StarRating } from '../utils';
import Icon from 'react-native-vector-icons/dist/Feather';
import config from '../../config';

const {width} = Dimensions.get('window');
const maxWidth = (width/2) - 5;

export default class ProductListItem extends React.Component {


	layout01() {
		return (
			<Card style={this.props.style} onPress={() => this.props.onPress(this.props.item)}>
				<Row nomargin={true}>
					<Column flex={0.37} align={'center'} nopadding={true}>
					{
							this.props.item.images.length > 0 ? 
								<Image 
				                    source={{uri: this.props.item.images[0]}}
				                    style={styles.image} 
				                /> : 
				                <Image 
				                    source={require('../../assets/img/placeholder_image-new.png')}
				                    style={styles.imagePlaceholder} 
				                />
						}
					</Column>
					<Column flex={0.63} style={{paddingVertical: 10}}>
						<View>
							<Sm>{this.props.item.name}</Sm>
						</View>
						<Space height={3} />
						<Row nomargin={true} style={{alignItems: 'flex-end', flex: 1}}>
							<Column nopadding={true}>
								<View>
									<StarRating rating={this.props.item.rating} />
									<Price specialPrice={this.props.item.special_price} price={this.props.item.price} />
								</View>
							</Column>
							<Column align={'flex-end'} nopadding={true}>
								<Touchable onPress={() => {}} style={[config.style.iconBtn, config.style.gridCartBtn]}>
									<Icon name={'shopping-cart'} size={20} color={config.style.iconBtnColor} />
								</Touchable>
							</Column>
						</Row>
					</Column>
				</Row>
			</Card>
		);
	}

	render() {
		return this.layout01();
	}
	
}

const styles = StyleSheet.create({
	outer: {
		width: '100%', 
		padding: 4,
		maxWidth: maxWidth
	},
	inner: {
		shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        backgroundColor: '#ffffff'
	},
	imageWrapper: {
		alignItems: 'center', 
		marginHorizontal: -10,
		overflow: 'hidden'
	},
	image: {
		width: '100%', 
		height: 100, 
		resizeMode: 'cover',
		borderTopLeftRadius: config.defaultBorderRadius,
		borderBottomLeftRadius: config.defaultBorderRadius,
		overflow: 'hidden'
	},
	imagePlaceholder: {
		width: 80, 
		height: 80,
		opacity: 0.7,
		resizeMode: 'cover'
	},
	detailWrapper: {
		padding: 7
	},
	title: {
		fontWeight: 'bold'
	},
	sku: {
	},
	priceWrapper: {
		flexDirection: 'row',
		flex: 1
	},
	ratingWrapper: {
		flex: 0.4
	},
	priceWrapperInner: {
		flex: 0.6,
		alignItems: 'flex-end'
	},
	price: {
		fontWeight: 'bold',
		color: '#222222',
		fontSize: 16
	},
	tariffPrice: {
		fontSize: 12,
		alignSelf: 'flex-end',
		color: '#00b0ed',
		fontWeight: 'bold'
	},
	btn: {
		marginTop: 15,
		height: 32,
        borderRadius: 16,
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
        elevation: 1
	},
	btnGrey: {
		marginTop: 15,
		height: 32,
        borderRadius: 16,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center'
	},
	btnText: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 13
	},
	btnGreyText: {
		color: '#555555',
		fontWeight: 'bold',
		fontSize: 13
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
	}

});