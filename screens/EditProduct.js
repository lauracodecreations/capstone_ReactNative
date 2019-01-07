import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class EditProduct extends Component {

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('id', 'NO-ID');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          More information for product number #{JSON.stringify(itemId)}
        </Text>
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
  }
});
