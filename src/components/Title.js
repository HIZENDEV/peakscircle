import React from 'react'
import {View, Text, TouchableOpacity, StatusBar, Image, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {title as styles} from '@styles/Index'

export default class Title extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (this.props.action) {
      {/* Action Right */}
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.name}</Text>
          <TouchableOpacity style={styles.action} onPress={() => console.log('hello')}>
            <Icon name={'notification-clear-all'} size={24} style={styles.icons}/>
          </TouchableOpacity>
        </View>
      )
    } else {
      {/* Default Title */}
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.name}</Text>
        </View>
      );
    }
  }

}
