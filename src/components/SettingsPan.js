import React from 'react'
import { View, FlatList, Text, Switch, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { settings as styles } from '@styles/Index'

export default class SettingsPan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _renderType(type) {
    if (type === 'edit') {
      return <Icon name={"pencil"} size={25} style={styles.icons} />
    } else if (type === 'switch') {
      return <Switch />
    } else {
      return <Icon name={"chevron-right"} size={25} style={styles.icons} />
    }
  }

  _renderSelect(item) {
    if (item.type !== 'switch') {
      return (
        <TouchableOpacity style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
          {this._renderType(item.type)}
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
          {this._renderType(item.type)}
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.props.items} renderItem={({ item }) => (
          this._renderSelect(item)
        )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
      </View>
    )
  }
}