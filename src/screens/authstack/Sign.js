import React from "react"
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from 'react-native-modalbox'
import Title from '@components/Title'
import Database from '@services/Database'
import { sign as styles } from "@styles/Index"
import * as auth from "@services/Auth"
import Status from '@components/Status'

export default class Sign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSigninInProgress: false,
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    }
  }

  _signIn = async () => {
      if (this.state.isSigninInProgress) {
        return false
      }
    try {
      this.setState({ isSigninInProgress: true })
      await auth.signIn()
      this.props.navigation.navigate("App")
    } catch (e) {
      this.setState({ isSigninInProgress: false })
      alert("Something goes wrong!")
    }
  }

  _onClose = () => {
    alert('closed')
  }

  async _isPendingUser() {
    if (!this.state.email)
      return false
    const user = {
      displayName: '',
      email: this.state.email,
      photoURL: '',
      uid: null,
      fcmToken: null,
    }
    const pending = await Database.requestPendingUsers(this.state.email)
    pending.forEach(email => {
      if (email === this.state.email)
        this.props.navigation.navigate('SelectPic', { user })
      else
        alert('You must be invited to register')
    })
  }

  render() {
    return (
      <React.Fragment>
        <Status backgroundColor={'#FFC55C'} barStyle={'light-content'} />
        <Image
          source={require("@assets/intro.png")}
          style={styles.top}
        />
        <View style={styles.container}>
          <TouchableOpacity onPress={this._signIn} style={styles.signInButton}>
            <View style={styles.innerButton}>
              <Image
                source={require("@assets/sign.png")}
                style={styles.iconButton}
              />
            </View>
            <Text style={styles.textButton}>Sign in as employee</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.refs.modal.open()}
            style={styles.signInButton}
          >
            <View style={styles.innerButton}>
              <Icon name={'account-circle'} size={25} style={styles.iconButtonSVG} />
            </View>
            <Text style={styles.textButton}>Sign in as an outsider</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.alpha}>
          <Text style={styles.textAlpha}>Get started.</Text>
          <Text style={styles.textAlpha}>It's free and easy</Text>
        </View>
        <Modal
          ref={"modal"}
          style={styles.modal}
          position={"center"}
          onClosed={() => this._onClose()}>
          <Title name="Sign in as an outsider"/>
          <View style={styles.modalContainer}>
          <View style={styles.fieldSection}>
              <Icon name={'email'} size={24} style={styles.fieldIcon} />
              <TextInput
                style={styles.input}
                autoComplete={'email'}
                keyboardType={'email-address'}
                textContentType={'emailAddress'}
                maxLength={256}
                placeholderTextColor="#707070"
                placeholder={'Email'}
                onChangeText={(email) => { this.setState({ email }) }}
                underlineColorAndroid="transparent" />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this._isPendingUser()}
            style={styles.nextButton}
          >
            <Icon name={'arrow-right'} size={20} style={styles.nextButtonIcon} />
          </TouchableOpacity>
        </Modal>
      </React.Fragment>
    );
  }
}
