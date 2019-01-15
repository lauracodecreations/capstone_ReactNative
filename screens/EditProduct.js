import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { Header } from 'react-native-elements';

export default class EditProduct extends Component {

  constructor(props) {
     super(props);
     this.state = {
       text:"",
       isLoading: true
     };
   }

  deleteItemAPIcall(upc) {
    fetch(`https://productsbarcode.herokuapp.com/products/${upc}`, {
      method: 'DELETE',
    });
    this.props.navigation.navigate('Main')

  }
  alertScreen(upc) {
    Alert.alert(
      'Delete Product',
      'Would you really like to delete product?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => this.deleteItemAPIcall(upc)},
      ],
      { cancelable: false }
   );
  }
  componentDidMount(){
    const { navigation } = this.props;
    const upc = navigation.getParam('upc', 'NO-UPC');
    return fetch(`https://productsbarcode.herokuapp.com/products/${upc}`)
    .then((response) => response.json())
    .then((json) => {

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
      this.setState({
        errors: ` ${error.message}`
      });
     });
  }

  render() {
    const { navigation } = this.props;
    const upc = navigation.getParam('upc', 'NO-UPC');
    return (
      <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'arrow-back', color: '#fff',onPress: () => this.props.navigation.navigate('Main') }}
        centerComponent={{ text: 'Product Details', style: { color: '#fff' } }}
        rightComponent={{ icon: 'delete', color: '#fff',onPress: () => this.alertScreen(upc)}}
        containerStyle={{
           backgroundColor: '#000000',
         }}
      />
      <Text> {this.state.name} </Text>
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
