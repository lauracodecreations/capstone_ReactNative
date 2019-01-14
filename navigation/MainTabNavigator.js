import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import AddProduct from '../screens/AddProduct';
import SettingsScreen from '../screens/SettingsScreen';
import ProductList from '../screens/ProductList';
import AddDate from '../screens/AddDate';



const AddDateStack = createStackNavigator({
  Links: AddDate,
});


AddDateStack.navigationOptions = {
  tabBarLabel: 'Add Date',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-link'}
    />
  ),
};


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

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};


export default createBottomTabNavigator({
  ProductsStack,
  LinksStack,
  AddProductStack,
  SettingsStack,
  AddDateStack,
});
