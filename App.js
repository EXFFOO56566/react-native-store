/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { LogBox, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/Feather';
import config from './config';

// all screens
import Home from './components/screens/Home';
import CategoryListing from './components/screens/CategoryListing';
import ProductListing from './components/screens/ProductListing';
import Address from './components/screens/Address';
import Payment from './components/screens/Payment';
import ThankYou from './components/screens/ThankYou';
import Cart from './components/screens/Cart';
import Settings from './components/screens/Settings';
import ProductDetail from './components/screens/ProductDetail';
import Login from './components/screens/Login';
import Register from './components/screens/Register';
import OrderHistory from './components/screens/OrderHistory';
import OrderDetail from './components/screens/OrderDetail';
import WebViewContent from './components/screens/WebViewContent';
import EditProfile from './components/screens/EditProfile';

global.debugMode = false;
global.backIcon = Platform.OS == 'ios' ? 'chevron-left' : 'arrow-left';
global.nextIcon = Platform.OS == 'ios' ? 'chevron-right' : 'arrow-right';
if(!global.debugMode) {
  LogBox.ignoreAllLogs(true);
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabBarIcon = (props) => {
  return (
    <Icon
      name={props.name}
      size={22}
      style={{ marginBottom: -3 }}
      color={props.focused ? config.primaryColor : config.defaultFontColor}
    />
  );
}


const Tabs = () => {
  const TabStyle = {
    backgroundColor: config.tabBarColor, 
  };

  if(Platform.OS == 'android') {
    TabStyle.paddingBottom = 10; 
    TabStyle.height = 55;
  }

  return (
    <Tab.Navigator tabBarOptions={{style: TabStyle, activeTintColor: config.primaryColor, inactiveTintColor: config.defaultFontColor}}>
      <Tab.Screen name="Home" component={Home} options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }} />
      <Tab.Screen name="Shop" component={CategoryListing} options={{
          title: 'Shop',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="box" />,
        }} />
      <Tab.Screen name="Products" component={ProductListing} options={{
          title: 'Products',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="grid" />,
        }} />
      
      <Tab.Screen name="Cart" component={Cart} options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="shopping-cart" />,
        }} />

      <Tab.Screen name="Settings" component={Settings} options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />,
        }} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Shop" component={CategoryListing} />
        <Stack.Screen name="Products" component={ProductListing} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="WebViewContent" component={WebViewContent} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="ThankYou" component={ThankYou} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
