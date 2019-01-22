import React from 'react'
import { View, Image, StatusBar, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { image as styles } from '@styles/Index'

export default class Memories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const item = this.props.navigation.getParam('item', null)
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.goBack()} >
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <Image style={styles.image} source={{ uri: `${item.src}` }} />
      </TouchableOpacity>
    )
  }

}