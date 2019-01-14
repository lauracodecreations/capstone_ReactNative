import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TextInput,
    DatePickerIOS,
} from 'react-native';

export default class EditProduct extends Component {
  constructor(props) {
     super(props);
     this.state = {
       chosenDate: new Date(),
       text:""
     };

   }

  getInfoFromAPI(upc) {
    fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`)
    .then((response) => response.json())
    .then((json) => {

      this.setState({
        image: json.items[0].images[1],
        name: json.items[0].title,
        brand: json.items[0].brand,
        description: json.items[0].description,
        upc: json.items[0].ean,
        color: json.items[0].color,
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }


  postInfotoAPI() {
    fetch('https://api.upcitemdb.com/prod/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: this.state.image,
        name: this.state.name,
        upc: this.state.upc,
        date: this.state.date,
        brand: this.state.brand,
        description: this.state.description,
        color: this.state.color,
        pao: this.state.text
      }),
    });
  }

  render() {
    const { navigation } = this.props;
    const itemUPC = navigation.getParam('upc', 'NO-UPC');
    return (
      <View style={styles.container}>
        <Text>{this.getInfoFromAPI(itemUPC)}</Text>
        <Text>UPC: {itemUPC}</Text>
        <Text >Name: {this.state.name}</Text>
        <Text >Image: {this.state.image}</Text>
        <Image source={{uri: `${this.state.image}`}}
        resizeMode="contain" />
        <TextInput
                style={{height: 40}}
                placeholder="PAO number"
                onChangeText={(text) => this.setState({text})}
        />
        <Button
                    title="Save"
                    onPress={() => this.postInfotoAPI()}
                />
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
