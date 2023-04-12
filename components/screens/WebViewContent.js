import React from 'react';
import {
	Platform,
	Dimensions,
} from 'react-native';

import { Wrapper, Left, Header, H4, IconBtn} from '../utils';
import { WebView } from 'react-native-webview';

const {height} = Dimensions.get('window');

export default class WebViewContent extends React.Component {

	state = {};
	
	constructor(props) {
		super(props);
		this.state.content = this.props.route.params.content || '';
		this.state.heading = this.props.route.params.heading || '';
	}
    
    getContent() {
		let content = this.state.content;
		let fontSize = Platform.OS == 'ios' ? '30px' : '15px';

		content += '<style>img {max-width: 100%;} body {font-family: arial; font-size: '+fontSize+'} td,th {font-size: '+fontSize+' !important, padding: 15px !important} iframe {max-width: 100% !important} </style>';

		return '<section style="padding: 15px">' + content + '</section>';
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
                        <H4 style={{alignSelf: 'center'}}>{this.state.heading}</H4>
					</Left>
				</Header>


                <WebView
                    style={{width: '100%', flex: 1, height: height*.85}}
                    originWhitelist={['*']}
                    source={{ html: this.getContent() }}
                />

			</Wrapper>

		);
	}
}