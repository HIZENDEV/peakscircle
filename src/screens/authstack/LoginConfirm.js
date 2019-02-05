import React from 'react'
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import { loginInfo as styles } from "@styles/Index"
import * as auth from "@services/Auth"
import { observer } from "mobx-react"

@observer
export default class Threads extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _nextStep = (user) => {
    if (this.state.password && this.state.repeat) {
      if (this.state.password === this.state.repeat) {
        this._signIn(user.email, this.state.password, user)
      } else {
        alert('Your passwords do not match')
      }
    }
  }
  _signIn = async (email, password, user) => {
    if (this.state.isSigninInProgress) {
      return false
    }
  try {
    console.log(email, password, user)
    this.setState({ isSigninInProgress: true })
    await auth.signInWithEmailAndPassword(email, password, user)
    this.props.navigation.navigate("App")
  } catch (e) {
    this.setState({ isSigninInProgress: false })
    alert("Something goes wrong!")
  }
}


  render() {
    let { navigation } = this.props
    let user = navigation.getParam('user', null)    
    console.log(this.state)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fill your password</Text>
        <Text style={styles.subtitle}>Welcome {user.displayName}</Text>
        <View style={styles.list}>
          <View style={styles.picContainer}>
            <Image style={styles.pic} source={{ uri: `${user.photoURL}` }} />
          </View>

          <View style={styles.fieldSection}>
            <TextInput
              style={styles.input}
              maxLength={48}
              placeholderTextColor="#707070"
              placeholder={'Password'}
              autoComplete={'password'}
              secureTextEntry={true}
              textContentType={'password'}
              onChangeText={(password) => { this.setState({ password }) }}
              underlineColorAndroid="transparent" />
          </View>
          <View style={styles.fieldSection}>
            <TextInput
              style={styles.input}
              maxLength={48}
              placeholderTextColor="#707070"
              placeholder={'Repeat Password'}
              autoComplete={'password'}
              secureTextEntry={true}
              textContentType={'password'}
              onChangeText={(repeat) => { this.setState({ repeat }) }}
              underlineColorAndroid="transparent" />
          </View>
        </View>

        <TouchableOpacity style={
          this.state.password && this.state.repeat ?
          styles.button
          : styles.disabled
          } onPress={() => this._nextStep(user)}>
          <Text style={styles.buttonInner}>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
