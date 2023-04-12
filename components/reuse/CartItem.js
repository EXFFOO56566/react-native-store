import React from 'react';
import {
	View, 
	Text,
	Image,
	StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Feather';
import config from '../../config';
import { Row, Column, Left, Right, Space, P, Sm, IconBtn } from '../utils';

export const CartItem = (props) => {

    return (
        <View style={[config.style.card, props.style || {}]}>
            <Row nomargin={true}>
                <Column flex={0.3} style={{paddingVertical: 10}}>
                    {
                        props.item.image ? 
                            <Image 
                                source={{uri: props.item.image}}
                                style={styles.image} 
                            /> : 
                            <Image 
                                source={require('../../assets/img/placeholder_image-new.png')}
                                style={styles.imagePlaceholder} 
                            />
                    }
                </Column>
                <Column flex={0.7} style={{paddingVertical: 10, paddingLeft: 0}}>
                    <P>{props.item.name}</P>
                    <Sm style={styles.sku}>{props.item.sku}</Sm>
                    <Space />
                    <Row nomargin={true}>
                        <Left>
                            <P style={styles.price}>{props.item.linetotal}</P>
                        </Left>
                        <Right>
                            <View style={styles.quantityWrapper}>
                                <TouchableOpacity style={styles.quantityBtn} onPress={() => props.updateItemQty(props.item, -1)}>
                                    <Icon name={'minus'} color={'#76777a'} size={22} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.quantityWrapperInner} onPress={() => props.showQuantityModal(props.item)}>
                                    <Text style={styles.quantityText}>{props.item.qty}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.quantityBtn} onPress={() => props.updateItemQty(props.item, 1)}>
                                    <Icon name={'plus'} color={'#76777a'} size={22} />
                                </TouchableOpacity>
                            </View>
                        </Right>
                    </Row>
					<IconBtn 
						onPress={() => console.log('add remove code here')}
						style={styles.removeBtn}
						icon={'x'}
						color={'#d6d6d6'}
					/>
                </Column>
            </Row>
        </View>
    );
	
}

const styles = StyleSheet.create({
	imageWrapper: {
		padding: 10,
		flex: 0.2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: '100%',
		height: 100,
		resizeMode: 'cover',
		borderRadius: config.defaultBorderRadius
	},
	imagePlaceholder: {
		width: 70, 
		height: 70,
		opacity: 0.7,
		resizeMode: 'cover'
	},
	detailWrapper: {
		padding: 10,
		flex: 0.8
	},
	removeBtn: {
		position: 'absolute',
		padding: 7,
		right: -10,
		top: 0
	},
	removeBtnText: {
		color: '#d6d6d6',
		fontSize: 15
	},
	title: {
		fontSize: 13,
		color: '#000000',
		marginBottom: 7
	},
	sku: {
		color: '#bebebe',
	},
	price: {
		fontWeight: 'bold',
		color: config.primaryColor,
        fontSize: 19,
        alignSelf: 'center'
	},
	priceWrapper: {
		flexDirection: 'row',
		flex: 1
	},
	priceWrapperInner: {
		flex: 0.5,
		justifyContent: 'flex-end'
	},
	quantityWrapper: {
		flex: 0.5,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	quantityBtn: {
		width: 35,
		height: 35,
		alignItems: 'center',
		justifyContent: 'center'
	},
	quantityWrapperInner: {
		width: 35,
		height: 35,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f5f6fa'
	},
	quantityText: {
		fontSize: 18
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