import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {userInfo as styles} from '@styles/Index'

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user.email
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Image source={{uri: this.props.user.photoURL}} style={styles.profilePic} />
      <Text style={styles.displayName}>{this.props.user.displayName}</Text>
      <Text style={styles.email}>{this.props.user.email}</Text>
      <View style={styles.social}>
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
      </View>
      </View>
    );
  }
}
