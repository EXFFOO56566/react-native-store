import React from 'react';
import {
	FlatList,
	StyleSheet,
	Dimensions,
	Modal
} from 'react-native';
import style from '../../style';
import { Wrapper, Left, Right, Container, Header, SelectableList, Space, Touchable, H1, P, IconBtn, Btn } from '../utils';
import sample_data from '../../sample_data';
import ProductGridItem from '../reuse/ProductGridItem';
import ProductListItem from '../reuse/ProductListItem';

const {height, width} = Dimensions.get('window');

export default class ProductListing extends React.Component {

	_keyProductExtractor = (item, index) => item.id;

	state = {
		q: '',
		mode: 'grid',
		categories: [],
		heading: "Products",
		products: [],
		showFilterModal: false,
		selectedFilters: {}
	};

	goToProduct(item) {
		this.props.navigation.navigate('ProductDetail', {product: item})
	}

	addToCart() {}

	clearFilter() {}

	_renderFilterModal() {
		return (
			<Wrapper>
				<Header>
					<Left>
						<IconBtn icon={'x'} 
							onPress={() => this.setState({
								showFilterModal: false
							})} 
							style={{marginLeft: -10}} 
						/>
					</Left>
					<Right>
						<Touchable onPress={() => this.clearFilter()}>
							<P>Clear</P>
						</Touchable>
					</Right>
				</Header>
				<Container>
					<H3>Colors</H3>
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
					<Space height={15} />
					<H3>Size</H3>
					<SelectableList 
						onSelect={(item) => this.setState(
							{selectedFilters: 
								{
									...this.state.selectedFilters, 
									...{size: item.id}
								}
							}
						)}
						isSelected={(item) => this.state.selectedFilters.size == item.id}
						items={sample_data.filters.sizes}
					/>

					<Space />

					<Btn label={'Apply Filter'} />

				</Container>
			</Wrapper>
		);
	}

	
	_renderItem = ({item}) => {
		return (
			<ProductGridItem
				key={item.id}
				onPress={this.goToProduct.bind(this)}
				addToCart={this.addToCart.bind(this)}
				item={item}
				showMessage={true}
				showCartBtn={true}
				style={{marginHorizontal: 2, flex: 0.5, maxWidth: (width/2)}}
				layout={1}
			/>
		)
	}

	_renderCardItem = ({item}) => {
		return (
			<ProductGridItem
				key={item.id}
				onPress={this.goToProduct.bind(this)}
				addToCart={this.addToCart.bind(this)}
				item={item}
				showMessage={true}
				showCartBtn={true}
				layout={1}
				imageStyle={{height: height/3}}
			/>
		)
	}

	_renderListItem = ({item}) => {
		return (
			<ProductListItem
				key={item.id}
				onPress={this.goToProduct.bind(this)}
				addToCart={this.addToCart.bind(this)}
				item={item}
				showMessage={true}
				showCartBtn={true}
				style={{marginHorizontal: 2}}
				layout={1}
			/>
		)
	}

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
					<Right>
						
						<IconBtn icon={'list'} 
							onPress={() => this.setState({mode: 'list'})}
						/>

						<IconBtn icon={'grid'} 
							onPress={() => this.setState({mode: 'grid'})}
						/>

						<IconBtn icon={'square'} 
							onPress={() => this.setState({mode: 'card'})}
						/>

						<Space vertical={true} />

						<IconBtn icon={'sliders'} 
							onPress={() => this.setState({showFilterModal: true})}
						/>

					</Right>
				</Header>

				<Container>

					<H1>{this.state.heading}</H1>
					
					{
						this.state.mode == 'grid' ? 
							<FlatList
								key={'grid'}
								data={sample_data.items}
								extraData={this.state}
								keyExtractor={this._keyProductExtractor}
								renderItem={this._renderItem}
								numColumns={2}
								contentContainerStyle={{flex: 1}}
							/>
							: null
					}

					{
						this.state.mode == 'list' ? 
							<FlatList
								key={'list'}
								data={sample_data.items}
								extraData={this.state}
								keyExtractor={this._keyProductExtractor}
								renderItem={this._renderListItem}
							/>
							: null
					}

					{
						this.state.mode == 'card' ? 
							<FlatList
								key={'card'}
								data={sample_data.items}
								extraData={this.state}
								keyExtractor={this._keyProductExtractor}
								renderItem={this._renderCardItem}
								ItemSeparatorComponent={() => <Space height={10} />}
							/>
							: null
					}

					

					

				</Container>

				<Modal
		        	animationType="slide"
		        	transparent={true}
		        	visible={this.state.showFilterModal}
		        >
		        	{this._renderFilterModal()}
		        </Modal>
			</Wrapper>

		);
	}

}

const styles = StyleSheet.create(style.home);