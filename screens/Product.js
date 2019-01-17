import React, { Component } from 'react';
import {Button, NavigatorIOS, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Product extends Component {
  render() {
    const date = new Date(`${this.props.date}`)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formatted_date = date.toLocaleDateString("en-US", options)
    let today = new Date();
    const datecolor = date <= today ? styles.expired : styles.upc;

    return(
    <TouchableOpacity onPress={() => this.props.navigation.navigate('ShowProduct', {upc: this.props.upc})}>
     <View style={styles.rowContainer}>
      <Image source={{uri: this.props.thumbnail}}
      style={styles.thumbnail}
      resizeMode="contain" />
      <View style={styles.rowText}>
      <Text style={datecolor} numberOfLines={1} ellipsizeMode ={'tail'}>
      { formatted_date != "Invalid Date" ? formatted_date : ""}
      </Text>
      <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
      {this.props.title}
      </Text>
      <Text style={styles.upc} numberOfLines={1} ellipsizeMode ={'tail'}>
      {this.props.upc}
      </Text>
      </View>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 110,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  upc: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  },
  expired: {
    color: 'red',
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
  }
});
