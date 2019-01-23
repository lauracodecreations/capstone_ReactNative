import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { showMessage, hideMessage } from "react-native-flash-message";


export default class ShowProduct extends Component {

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
    showMessage({
       message: 'Item successfully deleted.',
       type: "success",
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
        image: json.image,
        name: json.name,
        brand: json.brand,
        description: json.description,
        upc: json.upc,
        color: json.color,
        date: json.date
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
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const options2 = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(`${this.state.date}`)
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    const expirationDate = navigation.getParam('date', 'Not specified');

    return (

      <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'arrow-back', color: '#fff',onPress: () => this.props.navigation.navigate('Main') }}
        centerComponent={{ text: 'Product Details', style: { color: '#fff', fontWeight: 'bold', fontSize: 16 } }}
        rightComponent={{ icon: 'delete', color: '#fff',onPress: () => this.alertScreen(upc)}}
        containerStyle={{
           backgroundColor: '#000000',
         }}
      />
      <ScrollView style={styles.container}>
      <View style={styles.image}>
        <Text style={styles.upc}> {date.toLocaleDateString("en-US", options)} </Text>
        <Image source={{uri: this.state.image}}
        style={{width: 200, height: 200}}/>
        <Text style={styles.upc}> {this.state.upc}  </Text>
      </View>
      <Text style={styles.title}> {this.state.name} </Text>
      <Text style={styles.rowText}> {this.state.description} </Text>
      <Text style={styles.rowText}> Color: {this.state.color} </Text>
      <Text style={styles.rowText}> Brand: {this.state.brand} </Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('UpdateDate', {upc: this.state.upc})}>
      <View style={{ flexDirection:'row', justifyContent: 'space-between' }}>
        <Text style={styles.rowText}> Best Before: </Text>
        <Text style={styles.rowText2}>
        {expirationDate == "Not specified"? `${date.toLocaleDateString("en-US", options2)}`: `${expirationDate}`}
        <Text></Text>
        <Icon
        name='edit'
        size={20}
        backgroundColor='#000000'
         />
        </Text>
      </View>
      </TouchableOpacity>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  title: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 40,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    alignItems:'center',
    justifyContent:'center'
  },
  upc: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    paddingLeft: 10,
    color: '#777',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,

  },
  rowText: {
    paddingTop: 10,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#777',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowText2: {
    paddingTop: 10,
    fontSize: 16,
    paddingRight: 10,
    color: '#777',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
