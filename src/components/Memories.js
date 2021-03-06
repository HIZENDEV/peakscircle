import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-picker'
import Database from '@services/Database'
import Loading from '@components/Loading'
import { memories as styles } from '@styles/Index'
import { observer, inject } from "mobx-react"
import store from "@store/index"

const options = {
  title: 'Select Cover',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

@inject('store')
@observer
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

  _addMemories = () => {
    this.setState({isLoading: true})
    let $this = this
    const eventId = this.props.id
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.error) {
      } else {
        const name = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
        Database.uploadMemories(response.uri, name).then(async function(result) {
          await store.events.addMemories(result, eventId)
          $this.setState({isLoading: false})
          $this.props.store.alert.show = {
            display: true,
            message: 'Event memories updated',
            type: 'success'
          }
        })
      }
    })
  }

  _renderMemories = () => {
    let { store } = this.props
    let events = store.events.memories
    let picArr = []

    events.forEach(memories => {
      if (memories.key === this.props.id) {
        for (let i = 0; i < memories.pictures.length; i++) {
          picArr.push({id: i, src: memories.pictures[i]})
        }
      }
    });
    return picArr
  }

  render() {
    return (
      <React.Fragment> 
        <View style={styles.container}>
          <Text style={styles.title}>Memories</Text>
          <TouchableOpacity style={styles.action} onPress={() =>
            !this.state.isLoading ? this._addMemories() : null
          }>
            <Icon name={'image-multiple'} size={24} style={styles.icons} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
        { this.state.isLoading ? (<Loading fullscreen={false} />) : (
          <FlatList data={this._renderMemories()} renderItem={({ item }) => (
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
        )}
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