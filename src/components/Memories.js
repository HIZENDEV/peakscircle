import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { memories as styles } from '@styles/Index'

export default class Memories extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
  }

  componentWillMount() {
    const memories = this.props.memories
    let items = []
    if (this.props.memories) {
      for (let i = 0; i < memories.length; i++) {
        const item = {
          id: i,
          src: memories[i]
        }
        items.push(item)
      }
      this.setState({ items: items });
    }
    
  }

  render() {
    return (
      <React.Fragment> 
        <View style={styles.container}>
          <Text style={styles.title}>Memories</Text>
          <TouchableOpacity style={styles.action}>
            <Icon name={'image-multiple'} size={24} style={styles.icons} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <FlatList data={this.state.items} renderItem={({ item }) => (
            <TouchableOpacity style={styles.image} key={item.id}
              onPress={() => {
                this.props.navigation.navigate('Image', { item })
              }}>
              <Image style={styles.cover} source={{ uri: `${item.src}` }} />
            </TouchableOpacity>
          )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            ListEmptyComponent={_renderEmpty(this.props.type)}
          />
        </View>
      </React.Fragment>
    )
  }

}

const _renderEmpty = (props) => (
  <View style={styles.empty}>
    <Text style={styles.error}>There is no pictures for this event yet</Text>
  </View>
)