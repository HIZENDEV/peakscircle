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
    let { navigation } = this.props
    let items = navigation.getParam('subs', null)
    
    return (
      <React.Fragment>
        <FlatList data={items} renderItem={({ item }) => (
          <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('User', {user: item})}>
            <Image style={styles.image} source={{ uri: `${item.photoURL}` }} />
            <Text style={styles.name}>{item.displayName.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}</Text>
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