import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {title as styles} from '@styles/Index'

export default class Title extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (this.props.add && this.props.action) {
      {/* Action Right */}
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.name}</Text>
          <View style={styles.iconsAlign}>
            <TouchableOpacity style={[styles.action, styles.add]} onPress={() => this.props.navigation.navigate("Create")}>
              <Icon name={'plus'} size={24} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={() => this.props.navigation.navigate("Event")}>
              <Icon name={'filter-variant'} size={24} style={styles.icons}/>
            </TouchableOpacity>
          </View>
        </View>

      )
    } else if (this.props.actionText && this.props.action) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.name}</Text>
          <TouchableOpacity style={styles.action} onPress={this.props.action}>
            <Text style={styles.actionText}>{this.props.actionText}</Text>
          </TouchableOpacity>
        </View>
      )
    } else if (this.props.action) {
      {/* Add */ }
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.name}</Text>
          <TouchableOpacity style={styles.action} onPress={this.props.action}>
            <Icon name={'notification-clear-all'} size={24} style={styles.icons} />
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
