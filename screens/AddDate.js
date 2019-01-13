import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';

export default class EditProduct extends Component {

  state = {
    upc: "",
    image: "",
    name: "",
    brand: "",
    description: "",
    color: "",
    date: "",
    notes: "",
    pao:""
  };


  getInfoFromAPI(upc) {
    console.log('searching ');
    fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`)
    .then(function(response) {
      return response.json()
    }).then((json) => {
      this.setState({
        image: json.items[0].images[0],
        name: json.items[0].title,
        brand: json.items[0].brand,
        description: json.items[0].description,
        upc: json.items[0].ean,
        color: json.items[0].color,
      })
    })
  }
  render() {
    const { navigation } = this.props;
    const itemUPC = navigation.getParam('upc', 'NO-UPC');
    return (
      <View style={styles.container}>
        <Text>{this.getInfoFromAPI(itemUPC)}</Text>
        <Text>UPC: {itemUPC}</Text>
        <Text style={styles.title}>Name: {this.state.name}</Text>
        <Text style={styles.title}>Image: {this.state.image}</Text>
        <Image source={{uri: this.state.image}}
        style={styles.thumbnail}
        resizeMode="contain" />
        <Button
                    title="Back To Homepage"
                    onPress={() => this.props.navigation.navigate('Main')}
                />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    width: undefined
  },
});
