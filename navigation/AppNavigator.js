import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import ProductList from '../screens/ProductList';
import EditProduct from '../screens/EditProduct';
import AddProduct from '../screens/AddProduct';

import MainTabNavigator from './MainTabNavigator';

const BookcaseStack = createStackNavigator({
    Bookcase: {
        screen: ProductList,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    EditProduct: {
        screen: EditProduct,
        navigationOptions: ({navigation}) => ({
            header: null,
            tabBarVisible: false,
            gesturesEnabled: false
        }),
    },
});

const createRootNavigator = () => {
    return createStackNavigator(
        {
            Tabs: {
                screen: MainTabNavigator,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
            BookcaseStack: {
                screen: BookcaseStack,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            }

        },
        {
            headerMode: "none",
            mode: "modal"
        }
    );
};

const AppStack = createStackNavigator({ EditBook: EditProduct, ProductList: ProductList });


export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  EditProduct: AppStack,
  Main: MainTabNavigator,
});
