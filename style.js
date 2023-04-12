import { Dimensions, Platform } from 'react-native';
import config from './config';
const {height, width} = Dimensions.get('window');
const maxWidth = (width/2) - 5;

export default {

	common: {
		header: config.headerStyle,
		headerHeading: config.headerFontStyle,
	},
	home: {
		header: config.headerStyle,
		homeHeader: {
			height: Platform.OS == 'ios' ? 87 : 55,
			paddingTop: Platform.OS == 'ios' ? 35 : 0,
			shadowColor: "#000",
		    shadowOffset: {
		        width: 0,
		        height: 1,
		    },
		    shadowOpacity: 0.18,
		    shadowRadius: 1.00,
		    elevation: 1,
		    backgroundColor:  '#d11c28',
		    alignItems: 'center',
		    paddingHorizontal: 10
		},
		headerHeading: config.headerFontStyle,
		headerSearch: {
			height: 50,
			backgroundColor: config.headerColor,
			position: 'absolute',
			width: '100%',
			flexDirection: 'row',
			paddingHorizontal: 10,
		    paddingTop: 10,
			left: 0,
			top: 0
		},
		headerLeft: {
			flex: 0.6,
		    height: 60,
		    flexDirection: 'row',
		    alignItems: 'center'
		},
		headerRight: {
			flex: 0.4,
			justifyContent: 'flex-end',
		    height: 60,
		    alignItems: 'center',
		    flexDirection: 'row'
		},
		headerSearchLeft: {
			flex: 0.15,
			justifyContent: 'center',
			alignItems: 'flex-start'
		},
		headerSearchRight: {
			flex: 0.15,
			justifyContent: 'center',
			alignItems: 'flex-end'
		},
		headerSearchCenter: {
			flex: 0.7,
			alignItems: 'flex-start',
			justifyContent: 'center',
			paddingHorizontal: 3
		},
		headerIconWrap: {
			padding: 5
		},
		searchInput: {
			color: Platform.OS == 'ios' ? '#000000' : '#ffffff'
		},
		btn: {
			marginTop: 20,
			flexDirection: 'row',
	        height: 40,
	        borderRadius: 20,
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
	        elevation: 1,
	    },
	    btnText: {
	        fontWeight: 'bold',
	        color: '#ffffff',
	        fontSize: 16
	    },
	    clearSearchText: {
	    	fontSize: 12, 
	    	color: (Platform.OS == 'ios' ? 'red' : '#ffffff'), 
	    	marginTop: 9, 
	    	marginLeft: 5
	    },
	    headingWrapper: {
	    	marginTop: 10,
	    	marginBottom: 5,
	    	paddingHorizontal: 10
	    },
	    sectionHeading: {
	    	fontWeight: 'bold',
	    	fontSize: 16,
	    	color: '#555555'
	    },
	    sectionHeadingBorder: {
	    	width: 50,
	    	height: 1,
	    	marginTop: 2,
	    	backgroundColor: '#cc2122'
	    },
	    pdf: {
	        flex:1,
	        height: 200,
	        width:Dimensions.get('window').width,
	    },
	    categoryItem: {
	    	paddingHorizontal: 7, 
	    	paddingBottom: 3, 
	    	borderBottomColor: '#666666' 
	    },
	    categoryItemText: {
	    	color: '#666666'
	    },
	    brandItem: {
	    	width: (width/3) - 5, 
	    	alignItems: 'center', 
	    	justifyContent: 'center', 
	    	marginBottom: 10
	    },
	    brandItemWrapper: {
	    	padding: 20, 
			backgroundColor: config.cardColor,
			marginHorizontal: 5,
			borderRadius: 8
	    },
	    brandItemImage: { 
	    	width: 80, 
	    	height: 80, 
			resizeMode: 'contain',
			borderRadius: 8,
			backgroundColor: config.cardColor
	    }
	},
	payment: {

	},
	address: {
		progressWrapper: {
			flexDirection: 'row',
			padding: 10,
			backgroundColor: '#ffffff',
			marginBottom: 10
		},
		progressBorder: {
			position: 'absolute',
			width: '100%',
			height: 2,
			backgroundColor: '#b0b0b0',
			top: 20,
			left: 10,
		},
		progress: {
			flex: 0.34,
		},
		progressDot: {
			borderRadius: 10,
			width: 20,
			height: 20,
			borderWidth: 1,
			borderColor: '#aaaaaa'
		},
		progressLeft: {
			alignSelf: 'flex-start',
			
		},
		progressActive: {
			borderColor: '#4b4b55',
			backgroundColor: '#4b4b55'
		},
		progressPending: {
			borderColor: '#4b4b55',
			backgroundColor: '#ffffff'
		},
		progressCompleted: {
			borderColor: '#cc2122',
			backgroundColor: '#cc2122'
		},
		progressRight: {
			alignSelf: 'flex-end'
		},
		progressCenter: {
			alignSelf: 'center'
		},
		btnWrapper: {
			paddingLeft: 30,
			paddingRight: 30,
			marginTop: 10
		},
		btn: {
	        height: 40,
	        borderRadius: 20,
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
	        elevation: 1,
	    },
	    btnText: {
	        fontWeight: 'bold',
	        color: '#ffffff',
	        fontSize: 16
	    },
	    btnTransparent: {
	    	height: 40,
	        borderRadius: 20,
	        alignItems: 'center',
	        justifyContent: 'center',
	    	marginTop: 15
	    },
	    btnTextDark: {
	        fontWeight: 'bold',
	        color: '#cccccc',
	        fontSize: 16
	    }
	}

};