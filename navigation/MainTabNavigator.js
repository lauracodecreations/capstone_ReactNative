import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AddProduct from '../screens/AddProduct';
import SettingsScreen from '../screens/SettingsScreen';
import ProductList from '../screens/ProductList';
import TakePhoto from '../screens/takephoto';
import AddDate from '../screens/AddDate';




const ProductsStack = createStackNavigator({
  Links: ProductList,
});


ProductsStack.navigationOptions = {
  tabBarLabel: 'Products',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-link'}
    />
  ),
};

const AddProductStack = createStackNavigator({
  Links: AddProduct,
});


AddProductStack.navigationOptions = {
  tabBarLabel: 'Add Product',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'App Info',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-options'}
    />
  ),
};

const TakePhotoStack = createStackNavigator({
  TakePhoto: TakePhoto,
});

TakePhotoStack.navigationOptions = {
  tabBarLabel: 'TakePhoto',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  ProductsStack,
  AddProductStack,
  SettingsStack,
});
