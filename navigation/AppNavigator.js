import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import ProductList from '../screens/ProductList';
import ShowProduct from '../screens/ShowProduct';
import AddDate from '../screens/AddDate';
import AddProduct from '../screens/AddProduct';
import EnterDate from '../screens/EnterDate';
import TakePhoto from '../screens/takephoto';
import UpdateDate from '../screens/UpdateDate';







import MainTabNavigator from './MainTabNavigator';

const AppStack = createStackNavigator({ Home: MainTabNavigator, ProductList: ProductList });

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //order matters
  Main: MainTabNavigator,
  ShowProduct: ShowProduct,
  AddDate: AddDate,
  ProductList: ProductList,
  AddProduct: AddProduct,
  EnterDate: EnterDate,
  TakePhoto: TakePhoto,
  UpdateDate: UpdateDate,

});
