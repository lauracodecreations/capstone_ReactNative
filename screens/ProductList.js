import React, { Component } from 'react';
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

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Maybelline New York Expert Wear Shadow Palette, The Blushed Nudes, 0.34 oz',
          date: 'Nov 3, 2010',
          upc: '041554434866',
          thumbnail: 'https://scstylecaster.files.wordpress.com/2017/03/best-minimalist-beauty-products-feat.png'
        },
        {
          id: 2,
          title: 'Eyeliner',
          date: 'Nov 3, 2010',
          upc: '041554434866',
          thumbnail: 'https://scstylecaster.files.wordpress.com/2017/03/best-minimalist-beauty-products-feat.png'
        },
        {
          id: 3,
          title: '1984',
          date: 'Nov 3, 2010',
          upc: '041554434866',
          thumbnail: 'https://scstylecaster.files.wordpress.com/2017/03/best-minimalist-beauty-products-feat.png'
        }
      ]
    }
  }

  _renderItem = ({item}) => (
    <Item
      id={item.id}
      date={item.date}
      title={item.title}
      upc={item.upc}
      thumbnail={item.thumbnail}
    />
  );

  _keyExtractor = (item, index) => `list-item-${index}`;

  render() {
    return (
      <View style={styles.container}>
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
