import React from 'react'
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import { loginInfo as styles } from "@styles/Index"
import { observer } from "mobx-react"

@observer
export default class Threads extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _nextStep = (user) => {
    if (this.state.lastName && this.state.firstName) {
      user.displayName = `${this.state.firstName} ${this.state.lastName}`
      this.props.navigation.navigate('LoginConfirm', { user })
    }
  }


  render() {
    let { navigation } = this.props
    let user = navigation.getParam('user', null)    
    console.log(this.state)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Please tell us your name</Text>
        <Text style={styles.subtitle}>One more thing</Text>
        <View style={styles.list}>
          <View style={styles.picContainer}>
            <Image style={styles.pic} source={{ uri: `${user.photoURL}` }} />
          </View>

          <View style={styles.fieldSection}>
            <TextInput
              style={styles.input}
              maxLength={48}
              placeholderTextColor="#707070"
              placeholder={'First Name'}
              autoComplete={'off'}
              textContentType={'givenName'}
              onChangeText={(firstName) => { this.setState({ firstName }) }}
              underlineColorAndroid="transparent" />
          </View>
          <View style={styles.fieldSection}>
            <TextInput
              style={styles.input}
              maxLength={48}
              placeholderTextColor="#707070"
              placeholder={'Last Name'}
              autoComplete={'off'}
              textContentType={'familyName'}
              onChangeText={(lastName) => { this.setState({ lastName }) }}
              underlineColorAndroid="transparent" />
          </View>
        </View>

        <TouchableOpacity style={
          this.state.firstName && this.state.lastName ?
          styles.button
          : styles.disabled
          } onPress={() => this._nextStep(user)}>
          <Text style={styles.buttonInner}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
