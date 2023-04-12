import React from 'react';
import {
    View,
    Image
} from 'react-native';

import { Wrapper, Left, Container, Header, Row, Column, H1, P, H4, Footer, FloatingLabelInput, Btn, IconBtn } from '../utils';

export default class Payment extends React.Component {

    state = {};
    
    inputs = {};

	render() {

		const footer = (
			<Footer>
				<Btn 
					label={'Place Order'} 
					onPress={() => this.props.navigation.navigate('ThankYou')} 
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
				</Header>

				<Container>

					<H1>Payment</H1>

                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../assets/img/bank.png')} style={{height: 225, width: 225, resizeMode: 'cover'}} />
                        <P>Total Amount</P>
                        <H4>$1000.00</H4>
                    </View>

					<FloatingLabelInput 
						label="Name on Card"  
						onChangeText={(text) => this.setState({name: text})}
						returnKeyType={"next"}
						value={this.state.name}
						returnKeyType={"next"}
						ref={ input => {
							this.inputs['name'] = input;
						}}
						onSubmitEditing={() => {
							this.focusNextField('card');
						}}
					/>

                    <FloatingLabelInput 
						label="Card Number"  
						onChangeText={(text) => this.setState({card: text})}
						value={this.state.card}
						returnKeyType={"next"}
						ref={ input => {
							this.inputs['card'] = input;
						}}
						onSubmitEditing={() => {
							this.focusNextField('expiry');
						}}
					/>

					<Row>
						<Column>
							<FloatingLabelInput 
								label="Expiry"      
								onChangeText={(text) => this.setState({expiry: text})}
								returnKeyType={"next"}
								value={this.state.expiry}
								ref={ input => {
									this.inputs['expiry'] = input;
								}}
								onSubmitEditing={() => {
									this.focusNextField('ccv');
								}}
							/>
						</Column>

						<Column>
							<FloatingLabelInput 
								label="Security no."  
								onChangeText={(text) => this.setState({zip: text})}
								returnKeyType={"next"}
								value={this.state.zip}
								ref={ input => {
									this.inputs['ccv'] = input;
								}}
								onSubmitEditing={() => {
									this.props.navigation.navigate('ThankYou');
								}}
							/>
						</Column>
					</Row>

				</Container>
			</Wrapper>

		);
	}
}