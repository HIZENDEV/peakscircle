import React from 'react'
import { FlatList, View, TouchableOpacity, Text, Image } from 'react-native'
import { subscribersList as styles} from '@styles/Index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class SubscribersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'Subscribers'
    }
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.headerSimple}>
          <TouchableOpacity style={styles.back} onPress={this.props.back}>
            <Icon name={"chevron-left"} size={25} style={styles.icons} />
            <Text style={styles.backText}>back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{this.state.screen}</Text>
        </View>
        <FlatList data={this.props.items} renderItem={({ item }) => (
          <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{ uri: `${item.photoURL}` }} />
            <Text style={styles.name}>{item.displayName}</Text>
          </TouchableOpacity>
        )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
          ListEmptyComponent={_renderEmpty()}/>
      </React.Fragment>
    )
  }
}



const _renderEmpty = () => (
  <View style={styles.empty}>
    <Text style={styles.error}>There is no subscribers yet</Text>
  </View>
)