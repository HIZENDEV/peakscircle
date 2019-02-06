import React from 'react'
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {userInfo as styles} from '@styles/Index'
import * as auth from '@services/Auth'

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user.email
    }
  }

  _signOut = async () => {
    await auth.signOut()
    this.props.navigation.navigate("Auth")
  }

  render() {
    return (
      <View style={styles.container}>
      <Image source={{uri: this.props.user.photoURL}} style={styles.profilePic} />
      <Text style={styles.displayName}>{this.props.user.displayName}</Text>
      <Text style={styles.email}>{this.props.user.email}</Text>
      <TouchableOpacity style={styles.signOut} onPress={() => 
        Alert.alert(
        'Sign Out',
        'Are you sure you want to sign out?',
        [
          {text: 'Cancel', onPress: () => console.log('Sign Out cancelled'), style: 'cancel'},
          {text: 'Sign Out', onPress: () => this._signOut()},
        ],
        { cancelable: false }
        )
      }>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
      {/*<View style={styles.social}>
        <TouchableOpacity style={styles.linkedin}>
          <Icon name={'linkedin'} size={16} style={styles.icons}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.instagram}>
          <Icon name={'instagram'} size={16} style={styles.icons}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.twitter}>
          <Icon name={'twitter'} size={16} style={styles.icons}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dribbble}>
          <Icon name={'dribbble'} size={16} style={styles.icons}/>
        </TouchableOpacity>
      </View>*/}
      </View>
    );
  }
}
