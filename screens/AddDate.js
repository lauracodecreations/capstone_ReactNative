import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { StackNavigator } from 'react-navigation'
import {
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

import Item from './Product';

export default class AddDate extends Component {

  constructor(props) {
     super(props);
     this.state = {
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
      this.setState({
        errors: `Failure ${error.message}`
      });
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
    this.props.navigation.navigate('Main')
  }

  render() {
    const { navigation } = this.props;
    const itemUPC = navigation.getParam('upc', 'NO-UPC');
    return (
      <View style={styles.container}>

        <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.props.navigation.navigate('AddProduct') }}
          centerComponent={{ text: 'Add Product', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff',onPress: () => this.props.navigation.navigate('Main') }}
        />
        <Text> {this.errors ? `Failure ${this.errors}` : ''} </Text>
        <Text>{this.getInfoFromAPI(itemUPC)}</Text>
        <StatusBar
          barStyle="light-content"
        />
        <Item
          date={this.state.date}
          title={this.state.name}
          upc={itemUPC}
          thumbnail={this.state.image}
          navigation={this.props.navigation}
        />
        <Text style={styles.text}> Please enter PAO number: </Text>
        <TextInput
                style={styles.textbox}
                placeholder="PAO number"
                autofocus={true}
                label="PAO Number"
                onChangeText={(text) => this.setState({text})}

        />
        <Text style={styles.space}>  </Text>
        <Button
                    title="Add to Products"
                    onPress={() => this.postInfotoAPI()}
                />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ecf0f1',
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
  textbox: {
    height: 40,
    width: 316,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    borderColor: 'gray',
    borderWidth: 1,
    color: '#000000',
  },
  text: {
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 15,
  },
  space: {
    paddingTop: 60
  }
});
