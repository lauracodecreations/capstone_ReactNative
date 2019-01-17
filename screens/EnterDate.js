import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  StyleSheet,
} from 'react-native'
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation'


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
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formatted_date = date.toLocaleDateString("en-US", options)
    const { navigation } = this.props;
    const itemUPC = navigation.getParam('upc', 'NO-UPC');
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
        <Button
                    title="Save"
                    onPress={() => this.props.navigation.navigate('AddDate', {upc: itemUPC, date: formatted_date})}
                    color="#FFFFF"
                />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})
