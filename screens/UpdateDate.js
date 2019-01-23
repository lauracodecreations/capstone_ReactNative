import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation'
import { Header } from 'react-native-elements';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
    const date = this.state.chosenDate
    console.log(date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formatted_date = date.toLocaleDateString("en-US", options)
    const { navigation } = this.props;
    const itemUPC = navigation.getParam('upc', 'NO-UPC');
    return (
      <View style={styles.container}>
      <Header
        leftComponent={{ text: 'Cancel', style: { color: '#fff' }, onPress: () => this.props.navigation.navigate('ShowProduct', {upc: itemUPC} ) }}
        rightComponent={{ text: 'Save', style: { color: '#fff' } ,onPress: () => this.props.navigation.navigate('ShowProduct', {date: formatted_date, upc: itemUPC}) }}
        containerStyle={{
           backgroundColor: '#000000',
         }}
      />
      <ScrollView style={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
          mode="date"
        />
      </ScrollView>
      </View>



    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
