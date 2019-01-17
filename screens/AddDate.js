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
  DatePickerIOS,
  Alert,
  View
} from 'react-native';

import Item from './Product';

export default class AddDate extends Component {

  constructor(props) {
     super(props);
     this.state = {
       text:"",
       isLoading: true,
     };
   }


   componentDidMount(){
     const { navigation } = this.props;
     const upc = navigation.getParam('upc', 'NO-UPC');
     return fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`)
     .then((response) => response.json())
     .then((json) => {
       console.log(json)
       if (json.code != "OK") {
         Alert.alert(json.message)
       }
         this.setState({
           isLoading: false,
           image: json.items[0].images[1],
           name: json.items[0].title,
           brand: json.items[0].brand,
           description: json.items[0].description,
           upc: json.items[0].ean,
           color: json.items[0].color,
         },function(){

         });
       })
       .catch((error) =>{
         console.log(error)
        });
   }


  postInfotoAPI() {
    fetch('https://productsbarcode.herokuapp.com/products/', {
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
    }).then(function(response) {
      return response.json()
    }).then((json) => {
      console.log(json.ok)
      if(json.ok == false) {
        Alert.alert("Product is already in database")
      } else {
        this.props.navigation.navigate('Main')
      }
    });
  }

  alertScreen() {
    Alert.alert(
      'Product is already in the dataset',
   );
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
    const { navigation } = this.props;
    const expirationDate = navigation.getParam('date', 'Not specified');
    return (
      <View style={styles.container}>

        <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.props.navigation.navigate('AddProduct') }}
          centerComponent={{ text: 'Add Product', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff',onPress: () => this.props.navigation.navigate('Main') }}
          containerStyle={{
             backgroundColor: '#000000',
           }}
        />
        <StatusBar
          barStyle="light-content"
        />
        <Item
          date={this.state.date}
          title={this.state.name}
          upc={this.state.upc}
          thumbnail={this.state.image}
          navigation={this.props.navigation}
        />
        <Text style={styles.text}> Period After Opening: </Text>
        <TextInput
                style={styles.textbox}
                placeholder="PAO number"
                autofocus={true}
                label="PAO Number"
                onChangeText={(text) => this.setState({text})}

        />
        <Text style={styles.space}>  </Text>
        <Text> {expirationDate}  </Text>
        <Button
                    title="Enter Expiration Date"
                    onPress={() =>  this.props.navigation.navigate('EnterDate', {upc: this.state.upc})}
                    color="#FFFFF"
                />
        <Button
                    title="Add to Products"
                    onPress={() => this.props.navigation.navigate('EnterDate')}
                    color="#FFFFF"
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
