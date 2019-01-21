import React from 'react'
import {View, Text, Image} from 'react-native'
import firebase from 'react-native-firebase'
import Status from '@components/Status'

export default class AuthLoading extends React.Component {

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const user = await firebase.auth().currentUser;
    this.props.navigation.navigate(user ? 'App' : 'Auth');
  };

    render() {
      return (
        <React.Fragment>
          <Status backgroundColor={'#323160'} barStyle={'light-content'} />
          <View style={{ flex: 1, backgroundColor: '#37a3ff', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '60%'}}>
            <Image source={require('@assets/logo.png')} style={{ width: '25%', height: '20%', resizeMode: 'contain'}} />
            <Text style={{ flex: 1, color: '#fff', alignItems: 'center', fontWeight: 'bold', paddingTop: '10%'}}>PEAKS CIRCLE</Text>
          </View>
          <Image source={require('@assets/intro.png')} style={{ position: 'absolute', bottom: 0, width: '100%'}} />
        </React.Fragment>
      );
    }
  }
