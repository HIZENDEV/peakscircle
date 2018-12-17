import React from 'react'
import {View, Text, Image, StatusBar, AsyncStorage} from 'react-native'
import firebase from 'react-native-firebase'

export default class AuthLoading extends React.Component {

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user) {
      console.warn('true with currentUser method')
    } else {
      console.warn('false with currentUser method')
    }
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.warn('true with onAuthStateChanged method')
      } else {
        console.warn('false with onAuthStateChanged method')
      }
    });
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    setTimeout(() => {
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }, 2000);
  };

    render() {
      return (
        <React.Fragment>
          <StatusBar barStyle="light-content" />
          <View style={{ flex: 1, backgroundColor: '#37a3ff', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '60%'}}>
            <Image source={require('@assets/logo.png')} style={{ width: '25%', height: '20%', resizeMode: 'contain'}} />
            <Text style={{ flex: 1, color: '#fff', alignItems: 'center', fontWeight: 'bold', paddingTop: '10%'}}>PEAKS CIRCLE</Text>
          </View>
          <Image source={require('@assets/intro_x3.png')} style={{ position: 'absolute', bottom: 0, width: '100%'}} />
        </React.Fragment>
      );
    }
  }
