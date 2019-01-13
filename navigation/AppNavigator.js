import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import ProductList from '../screens/ProductList';
import EditProduct from '../screens/EditProduct';
import AddDate from '../screens/AddDate';



import MainTabNavigator from './MainTabNavigator';

const AppStack = createStackNavigator({ Home: MainTabNavigator, ProductList: ProductList });

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //order matters
  Main: MainTabNavigator,
  EditProduct: EditProduct,
  AddDate: AddDate,
  ProductList: ProductList,
});
