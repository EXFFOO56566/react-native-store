import React from 'react';
import { Wrapper, Left, Container, Header, H1, FloatingLabelInput, IconBtn, Btn } from '../utils';

export default class EditProfile extends React.Component {

    state = {};
    
    inputs = {};

    focusNextField(field) {
        if(inputs[field] !== undefined) {
            inputs[field].focus();
        }
    }

	render() {

        const footer = (
			<Footer>
				<Btn
					label={'Save'}
					onPress={() => console.log('save profile ...')}
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

					<H1>Edit Profile</H1>

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

				</Container>
			</Wrapper>

		);
	}
}