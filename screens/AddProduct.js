import React from 'react';
import { StyleSheet, Text, View, Alert,Image } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class AddProduct extends React.Component {
  static navigationOptions = {
    title: 'Add Product',
  };

  state = {
    hasCameraPermission: null,
    upc: "",
    image: "",
    title: "",
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    this.setState({
        upc: data.data
    })
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data.data)
    );
  };

  getInfoFromAPI(upc) {
    console.log('searching ');
    fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`)
    .then(function(response) {
      return response.json()
    }).then((json) => {
      console.log(json);
      this.setState({
        image: json.items[0].images[0],
        title: json.items[0].title
      })
      console.log(this.state);
    })
  }

  render() {
    let image =this.state.image
    return (
        <View style={styles.container}>
          <Text style={styles.getStartedText}>
            Automatically recognizes barcode on the screen.
          </Text>
          {this.state.hasCameraPermission === null ?
            <Text>Requesting for camera permission</Text> :
            this.state.hasCameraPermission === false ?
              <Text>Camera permission is not granted</Text> :
              <BarCodeScanner
                onBarCodeRead={this._handleBarCodeRead}
                style={{ height: 200, width: 200 }}
              />
          }
          <Text> {this.getInfoFromAPI(`${this.state.upc}`)}</Text>
          <Text> {this.state.title}</Text>
          <Image source={{uri:image}} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  getStartedText: {
    paddingBottom: Constants.statusBarHeight,
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
