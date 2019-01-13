import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

import Item from './Product';

export default class ProductList extends Component {

  static navigationOptions = {
    title: 'Products',
  };

  state = {
    items: "",
  };

  getInfoFromAPI() {
    fetch(`https://productsbarcode.herokuapp.com/products/`)
    .then(function(response) {
      return response.json()
    }).then((json) => {
      console.log(json);
      this.setState({
        items: json
      })
    })
  }

  _renderItem = ({item}) => (
    <Item
      id={item.id}
      date={item.date}
      title={item.name}
      upc={item.upc}
      thumbnail={item.image}
      navigation={this.props.navigation}
    />
  );

  _keyExtractor = (item, index) => `list-item-${index}`;

  render() {
    return (
      <View style={styles.container}>
        <Text> {this.getInfoFromAPI()} </Text>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.state.items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
