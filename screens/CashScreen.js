import React from 'react';
import Cash from './Cash';
import CartScreen from './CartScreen';
import {createAppContainer, createStackNavigator} from 'react-navigation';



const Rootstack = createStackNavigator({
    cart: CartScreen,
    cash: Cash,
  },
  {
    initialRouteName: 'cart',
    headerMode : 'none'
  }
  
  );
  
  
  const AppContainer = createAppContainer(Rootstack);
  
  export default class MainScreen extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
  