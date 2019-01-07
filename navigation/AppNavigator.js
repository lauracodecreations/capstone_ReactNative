import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import ProductList from '../screens/ProductList';
import EditProduct from '../screens/EditProduct';

import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  EditProduct: EditProduct,
  ProductList: ProductList,
  Main: MainTabNavigator,
});
