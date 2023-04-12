import React from 'react';
import {
	FlatList,
	StyleSheet,
	Dimensions
} from 'react-native';
import style from '../../style';
import { Wrapper, Left, Container, Header, H1, Right, IconBtn } from '../utils';
import sample_data from '../../sample_data';
import { CategoryCardItem } from '../reuse/CategoryCardItem';
import { CategoryGridItem } from '../reuse/CategoryGridItem';
import { CategoryBannerItem } from '../reuse/CategoryBannerItem';
const {width} = Dimensions.get('window');

export default class CategoryListing extends React.Component {

	_keyCategoryExtractor = (item, index) => item.id;

	state = {
		mode: 'grid'
	};

	goToCategory(item) {
		this.props.navigation.navigate('Products');
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
							onPress={() => this.setState({mode: 'banner'})}
						/>

						<IconBtn icon={'grid'} 
							onPress={() => this.setState({mode: 'grid'})}
						/>

						<IconBtn icon={'square'} 
							onPress={() => this.setState({mode: 'card'})}
						/>

					</Right>
				</Header>

				<Container>

					<H1>Shop</H1>

					{
						this.state.mode == 'banner' ?
							<FlatList
								key={'banner-mode'}
								data={sample_data.categories}
								extraData={this.state}
								keyExtractor={this._keyCategoryExtractor}
								renderItem={(({item}) => <CategoryBannerItem titlePosition={item.title_position} item={item} onPress={(item) => this.goToCategory(item)} style={{marginBottom: 15}} />)}
							/> : null
					}

					{
						this.state.mode == 'grid' ?
							<FlatList
								key={'grid-mode'}
								data={sample_data.brands}
								extraData={this.state}
								keyExtractor={this._keyCategoryExtractor}
								renderItem={(({item}) => <CategoryGridItem imageStyle={{width: (width-70)/2, height: (width-70)/2, resizeMode: 'contain'}} style={{maxWidth: (width-30)/2, marginHorizontal: 2, flex: 0.5, padding: 15}} item={item} onPress={(item) => this.goToCategory(item)} />)}
								numColumns={2}
							/> : null
					}

					{
						this.state.mode == 'card' ?
							<FlatList
								key={'card-mode'}
								data={sample_data.categories}
								extraData={this.state}
								keyExtractor={this._keyCategoryExtractor}
								renderItem={
									(({item}) => 
										<CategoryCardItem 
											style={{marginHorizontal: 2, flex: 0.5, maxWidth: (width-34)/2, marginBottom: 10}} 
											item={item}
											imageStyle={{width: '100%', height: (width-34)/2}}
											onPress={(item) => this.goToCategory(item)} 
										/>
									)}
								numColumns={2}
							/> : null
					}

				</Container>
			</Wrapper>

		);
	}

}

const styles = StyleSheet.create(style.home);