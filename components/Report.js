import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import {
    Text,
    View,
    Image,
    ScrollView,
    ActivityIndicator
} from 'react-native';


class Report extends Component {
  constructor(props) {
     super(props);
     this.state = {
       isLoading: true
     };
   }

   componentDidMount(){
     this.setState({
       isLoading: false
     });
   }
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
       <ScrollView style={styles.container}>
       <View style={styles.image}>
         <Text style={styles.upc}>
         </Text>
         <Image source={{uri: this.props.image}}
         style={{width: 200, height: 200}}/>
         <Text style={styles.upc}> {this.props.upc}  </Text>
       </View>
       <Text style={styles.title}> {this.props.name} </Text>
       <Text style={styles.rowText}> {this.props.description} </Text>
       <Text style={styles.rowText}> Color: {this.props.color} </Text>
       <Text style={styles.rowText}> Brand: {this.props.brand} </Text>
       </ScrollView>
       </View>
     );
   }
}
export default Report;

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
  }

});
