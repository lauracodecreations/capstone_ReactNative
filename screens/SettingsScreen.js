import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Text, View, Linking, ScrollView, StyleSheet} from 'react-native';
import { Expo, Constants, Calendar, Permissions} from 'expo';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
     super(props);
     this.state = {
       calendar_id: ''
     };
     this.accessCalendars = this.accessCalendars.bind(this);
   }

  componentDidMount() {
   this.accessCalendars()
  }

  async accessCalendars() {

    const { status } = await Permissions.askAsync(Permissions.CALENDAR);
    if (status === 'granted') {
      this.allCalendars();}
     else {
       console.log();('permission not granted');
     }
   }

  allCalendars = () => {
    Calendar.getCalendarsAsync()
      .then( event => {
        console.log(event);
        let my_id = 0
        event.forEach(function (calendar) {
          console.log(calendar.title);
          if(calendar.title == "Expire") {
            my_id = calendar.id
          }
       })
       this.setState({calendar_id: my_id})
        console.log(this.state.calendar_id);
      })
      .catch( error => {
        console.log(("error"));
        console.log((error));
      });
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config       <ExpoConfigView />
*/
     const githubLink = () => {
       Linking.openURL('https://github.com/lauramar6261')
     }

   const data = () => {
     Linking.openURL('https://devs.upcitemdb.com/')
   }

    return (
      <ScrollView style={styles.container}>
      <Text style={styles.title}>
          {`Date Tracker \n\n`}
        </Text>
      <Text style={styles.attribution}>
          {`Created by: \n`}
            <Text style={styles.link} onPress={githubLink}>
              {`\n        lauramar6261 \n\n`}
              </Text>
          {`Products data: \n`}
            <Text style={styles.link} onPress={data}>
              {`\n        UPCitemdb API \n\n`}
              </Text>
          {`Terminology: \n`}
              {`\n        The Period After Opening symbol identifies the useful lifetime of a cosmetic product after its package has been opened for the first time. \n\n`}
      </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  title: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  attribution: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 50
  },
  link: {
    flex: 1,
    color: '#0099ff',
  },
})
