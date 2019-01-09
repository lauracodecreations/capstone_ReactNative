// add an image
<Image
  source={
    __DEV__
      ? require('../assets/images/robot-dev.png')
      : require('../assets/images/robot-prod.png')
  }
  style={styles.welcomeImage}
/>

//add a section at the end of the screen
<View style={styles.tabBarInfoContainer}>
  <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

  <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
    <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
  </View>
</View>

//add style: add this at the end, and add the the call it using example above
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}

//add a link style: styles.codeHighlightText
<View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
  <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
</View>

codeHighlightText: {
  color: 'rgba(96,100,109, 0.8)',
}

//add a Link
<View style={styles.helpContainer}>
  <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
    <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
  </TouchableOpacity>
</View>

_handleHelpPress = () => {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
  );
};

//show something depending on something || add a link: learnMoreButton
<View style={styles.getStartedContainer}>
  {this._maybeRenderDevelopmentModeWarning()}

  <Text style={styles.getStartedText}>Get started by opening</Text>

  <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
    <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
  </View>

  <Text style={styles.getStartedText}>
    Change this text and your app will automatically reload.
  </Text>
</View>
_maybeRenderDevelopmentModeWarning() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled, your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode, your app will run at full speed.
      </Text>
    );
  }
}

//image / homepage
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <Text
            size={25}
            style={styles.getStartedText}
          >
            Keep track of your personal products exporation date by scanning its barcode
          </Text>
          <Image
            source={{uri:'https://scstylecaster.files.wordpress.com/2017/03/best-minimalist-beauty-products-feat.png'}}
            style={{width: 400, height: 600}}
          />

          </View>




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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
//in tab navigation
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};
