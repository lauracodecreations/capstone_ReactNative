import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import { ActivityIndicator  } from 'react-native';
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

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch(`https://productsbarcode.herokuapp.com/products/`)
    .then((response) => response.json())
    .then((json) => {

      this.setState({
        isLoading: false,
        items: json
      },function(){

      });
    })
    .catch((error) =>{
       console.error(error);
     });
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
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
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
