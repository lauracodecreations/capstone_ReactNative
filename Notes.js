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
