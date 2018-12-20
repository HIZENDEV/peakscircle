import React from 'react'
import {View, Text, TouchableOpacity, StatusBar} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {header as styles} from '@styles/Index'

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
        <TouchableOpacity style={styles.back} onPress={() => this.props.back}>
          <Icon name={'chevron-left'} size={25} style={styles.icons}/>
        </TouchableOpacity>
          <Text style={styles.title}>{this.props.screen}</Text>
        <TouchableOpacity style={styles.settings}>
          <Icon name={'settings'} size={25} style={styles.icons}/>
        </TouchableOpacity>
      </View>
    );
  }
}
