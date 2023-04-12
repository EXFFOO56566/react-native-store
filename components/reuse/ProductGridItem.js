import React from 'react';
import {
	View
} from 'react-native';

import { Card, CardContent, CardFooter, Left, Right, Touchable, StarRating, Sm, Price, CardImage } from '../utils';
import Icon from 'react-native-vector-icons/dist/Feather';
import config from '../../config';

export default class ProductGridItem extends React.Component {


	layout01() {
		return (
			<Card style={this.props.style} onPress={() => this.props.onPress(this.props.item)}>
				<CardImage 
					source={{uri: this.props.item.images[0]}}
				/>
				<CardContent>
					<View>
						<Sm>{this.props.item.name}</Sm>
					</View>
				</CardContent>
				<CardFooter>
					<Left >
						<View>
							<StarRating rating={this.props.item.rating} />
							<Price price={this.props.item.price} specialPrice={this.props.item.special_price} />
						</View>
					</Left>
					<Right>
						<Touchable onPress={() => {}} style={[config.style.iconBtn, config.style.gridCartBtn]}>
							<Icon name={'shopping-cart'} size={20} color={config.style.iconBtnColor} />
						</Touchable>
					</Right>
				</CardFooter>
			</Card>
		);
	}

	layout02() {
		return (
			<View>
				<Touchable style={[this.props.style || {}, {marginBottom: 15}]} onPress={() => this.props.onPress(this.props.item)}>
					<CardImage 
						source={{uri: this.props.item.images[0]}}
						style={{borderRadius: config.defaultBorderRadius}}
					/>
				</Touchable>
				
				<Sm>{this.props.item.name}</Sm>
				<Price price={this.props.item.price} specialPrice={this.props.item.special_price} />
			</View>
		);
	}

	layout03() {

	}

	render() {
		switch(this.props.layout) {
			case 2:
				return this.layout02();

			case 3:
				return this.layout03();
			
			default:
				return this.layout01();
		}
	}
	
}