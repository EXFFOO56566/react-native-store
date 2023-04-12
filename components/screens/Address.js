import React from 'react';
import {
	FlatList,
	Modal
} from 'react-native';

import {Wrapper, Header, Left, Right, Container, Space, Row, Column, H1, H2, Footer, FloatingLabelInput, Picker, Btn, IconBtn} from '../utils';
import sample_data from '../../sample_data';
import countries from '../../countries';
import { AddressItem } from '../reuse/AddressItem';

export default class Address extends React.Component {

	state = {
		showAddressModal: false,
		fullname: "",
		company: "",
		addr1: "",
		addr2: "",
		addr3: null,
		city: "",
		state: "",
		country: "US",
		phone: "",
		zip: "",
		isresidential: "F",
	}
    
	_keyExtractor = (item, index) => item.id;

	inputs = {};

    focusNextField(field) {
        if(inputs[field] !== undefined) {
            inputs[field].focus();
        }
    }

	_renderAddressForm() {
		return (
			<Wrapper>
				<Header>
					<Left>
						<IconBtn icon={'x'} 
							onPress={() => this.setState({showAddressModal: false})} 
							style={{marginLeft: -10}} 
						/>
					</Left>
				</Header>
				
				<Container>

					<H2>Add New Address</H2>

					<FloatingLabelInput 
						label="Full Name"  
						onChangeText={(text) => this.setState({fullname: text})}
						returnKeyType={"next"}
						value={this.state.fullname}
						ref={ input => {
							this.inputs['full_name'] = input;
						}}
						onSubmitEditing={() => {
							this.focusNextField('company');
						}}
					/>

					<FloatingLabelInput 
						label="Company Name (optional)"  
						onChangeText={(text) => this.setState({company: text})}
						returnKeyType={"next"}
						value={this.state.company}
						returnKeyType={"next"}
						ref={ input => {
							this.inputs['company'] = input;
						}}
						onSubmitEditing={() => {
							this.focusNextField('email');
						}}
					/>

					<FloatingLabelInput 
						label="Email"  
						onChangeText={(text) => this.setState({email: text})}
						returnKeyType={"next"}
						value={this.state.email}
						returnKeyType={"next"}
						ref={ input => {
							this.inputs['email'] = input;
						}}
						onSubmitEditing={() => {
							this.focusNextField('addr1');
						}}
					/>

					<FloatingLabelInput 
						label="Address"  
						onChangeText={(text) => this.setState({addr1: text})}
						returnKeyType={"next"}
						value={this.state.addr1}
						returnKeyType={"next"}
						ref={ input => {
							this.inputs['addr1'] = input;
						}}
						onSubmitEditing={() => {
							this.focusNextField('city');
						}}
					/>

					<Row>
						<Column>
							<FloatingLabelInput 
								label="City"  
								onChangeText={(text) => this.setState({city: text})}
								returnKeyType={"next"}
								value={this.state.city}
								returnKeyType={"next"}
								ref={ input => {
									this.inputs['city'] = input;
								}}
								onSubmitEditing={() => {
									this.focusNextField('zip');
								}}
							/>
						</Column>

						<Column>
							<FloatingLabelInput 
								label="Zip"  
								onChangeText={(text) => this.setState({zip: text})}
								returnKeyType={"next"}
								value={this.state.zip}
								returnKeyType={"next"}
								ref={ input => {
									this.inputs['zip'] = input;
								}}
								onSubmitEditing={() => {
									this.focusNextField('country');
								}}
							/>
						</Column>
					</Row>

					<Row>
						<Column>
							<Picker 
								label="Country"  
								onChangeItem={(item) => this.setState({country: item.label})}
								returnKeyType={"next"}
								value={this.state.country}
								returnKeyType={"next"}
								ref={ input => {
									this.inputs['country'] = input;
								}}
								onSubmitEditing={() => {
									this.focusNextField('state');
								}}
								items={countries}
							/>
						</Column>

						<Column>
							<FloatingLabelInput 
								label="State"  
								onChangeText={(text) => this.setState({state: text})}
								returnKeyType={"next"}
								value={this.state.state}
								returnKeyType={"next"}
								ref={ input => {
									this.inputs['state'] = input;
								}}
								onSubmitEditing={() => {
									this.focusNextField('phone');
								}}
							/>
						</Column>
					</Row>

					<FloatingLabelInput 
						label="Phone"  
						onChangeText={(text) => this.setState({phone: text})}
						value={this.state.phone}
						returnKeyType={"next"}
						ref={ input => {
							this.inputs['phone'] = input;
						}}
						onSubmitEditing={() => {
							this.addAddress();
						}}
					/>

					<Space />

                    <Btn 
                        label={'Add Shipping Address'}
                        onPress={() => this.addAddress()}
                    />

		    	</Container>

		    </Wrapper>
		);
	}

	render() {

		const footer = (
			<Footer>
				<Btn 
					label={'Proceed to Payment'} 
					onPress={() => this.props.navigation.navigate('Payment')} 
				/>
			</Footer>
		);

		return (
			<Wrapper footer={footer}>
				<Header>
					<Left>
						<IconBtn icon={global.backIcon} 
							onPress={() => this.props.navigation.goBack()} 
							style={{marginLeft: -10}} 
						/>
					</Left>
					<Right>
						<IconBtn icon={'plus'} 
							onPress={() => this.setState({showAddressModal: true})}
							style={{marginRight: -10}} 
						/>
					</Right>
				</Header>
				<Container>
					<H1>Address</H1>
					
					<FlatList
						data={sample_data.addresses}
						extraData={this.state}
						keyExtractor={this._keyExtractor}
						renderItem={({item}) => <AddressItem onPress={(item) => this.setState({selected: item.id})} item={item} selected={item.id == this.state.selected} />}
					/>

				</Container>

				<Modal
		        	animationType="slide"
		        	transparent={true}
		        	visible={this.state.showAddressModal}
		        >
		        	{this._renderAddressForm()}
		        </Modal>

			</Wrapper>
		)
	}
}