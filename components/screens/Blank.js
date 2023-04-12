import React from 'react';
import { Wrapper, Left, Container, Header, H1, IconBtn} from '../utils';

export default class Blank extends React.Component {

	state = {};

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
				</Header>

				<Container>

					<H1>Blank</H1>

					

				</Container>
			</Wrapper>

		);
	}
}