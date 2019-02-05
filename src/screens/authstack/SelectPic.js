import React from 'react'
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import { observer } from "mobx-react"
import { selectPic as styles } from "@styles/Index"
import Loading from '@components/Loading'
import Database from '@services/Database';

@observer
export default class Threads extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this._renderPic().then( items => this.setState({items, isReady: true}))
  }

  _renderPic = async () => {
    let photoURLs = []
    await Database.requestRegisterPic().then( picArr => {
      picArr.forEach(photoURL => {
        photoURLs.push(photoURL)
      })
      console.log(picArr)
    })
    return photoURLs
  }

  _selectPic = (user, item) => {
    user.photoURL = item
    this.setState({ selectedPic: item })
  }

  _nextStep = (user) => {
    user.photoURL ?
    this.props.navigation.navigate('LoginInfo', { user })
    : false
  }

  render() {
    let { navigation } = this.props
    let user = navigation.getParam('user', null)    
    console.log(this.state)
    return (
      this.state.isReady ? (
        <View style={styles.container}>
          <Text style={styles.title}>Select a profile picture</Text>
          <Text style={styles.subtitle}>You can change it later</Text>
          <FlatList data={this.state.items} extraData={this.state.selectedPic} renderItem={({ item }) => (
            <TouchableOpacity style={styles.image}
              onPress={() => this._selectPic(user, item)}>
              <Image style={
                this.state.selectedPic && this.state.selectedPic !== item ? styles.blur : styles.pic
                }
                source={{ uri: `${item}` }} />
            </TouchableOpacity>
          )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            style={styles.list}
          />
          <TouchableOpacity style={styles.button} onPress={() => this._nextStep(user)}>
            <Text style={styles.buttonInner}>Next</Text>
          </TouchableOpacity>
        </View>
      ) : <Loading fullscreen={true} />
    )
  }
}
