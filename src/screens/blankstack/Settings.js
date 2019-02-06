import React from 'react'
import { ScrollView, TouchableOpacity, Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '@components/Header'
import SettingsPan from '@components/SettingsPan'
import * as auth from '@services/Auth'
import store from "@store/index";
import { settings as styles } from '@styles/Index'
import { observer, inject } from "mobx-react";
import Modal from 'react-native-modalbox'

@inject('store')
@observer
export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Settings"
    };
    $this = this
  }

  componentWillMount() {
    this.setState({
      user: store.user.current
    })
  }

  _renderPrimary() {
    let { store } = this.props
    const items = [
      { title: 'Login with Touch ID', type: 'switch' },
      { title: store.user.current.displayName, type: 'edit', value: 'displayName'},
      { title: 'Social Network', type: 'edit', value: 'social' },
      { title: 'Login with Touch ID', type: 'view' },
      { title: 'About', type: 'view' },
    ]
    return items
  }

  _renderOptional() {
    const items = [
      { title: 'Receive all notification', type: 'switch' },
      { title: 'Deactivate account', type: 'view' },
      { title: 'Terms of Service', type: 'view' },
      { title: 'Privacy Policy', type: 'view' },
      { title: 'Send suggestion', type: 'view' },
    ]
    return items
  }

  _signOut = async () => {
    await auth.signOut();
    this.props.navigation.navigate("Auth");
  };

  editName(e) {
    $this.refs.modalName.open()
  }
  editSocial(e) {
    $this.refs.modalSocial.open()
  }
  render() {
    return (
      <React.Fragment>
        <Header back={() => this.props.navigation.goBack()} screen={this.state.screen} />
        <ScrollView style={{ backgroundColor: '#FFFFFF' }} >
          <TouchableOpacity
            style={styles.logout}
            onPress={() => this._signOut()} >
            <Text style={styles.title}>Sign Out</Text>
          </TouchableOpacity>
          <SettingsPan items={this._renderPrimary()} editSocial={this.editSocial} editName={this.editName}/>
          <SettingsPan items={this._renderOptional()} />
        </ScrollView>
        <Modal
          ref={"modalName"}
          style={styles.modal}
          position={"center"}>
          <DisplayNameEdit />
        </Modal>
        <Modal
          ref={"modalSocial"}
          style={styles.modal}
          position={"center"}>
          <SocialNetworkEdit />
        </Modal>
      </React.Fragment>
    )
  }
}

const SocialNetworkEdit = (props) => (
  <React.Fragment>
    <View style={styles.modalContainer}>
      <View style={styles.fieldSection}>
        <Icon name={'linkedin'} size={24} style={styles.fieldIcon} />
        <TextInput
          style={styles.input}
          autoComplete={'email'}
          keyboardType={'email-address'}
          textContentType={'emailAddress'}
          maxLength={256}
          placeholderTextColor="#707070"
          placeholder={'LinkedIn username'}
          onChangeText={(email) => { this.setState({ email }) }}
          underlineColorAndroid="transparent" />
      </View>
      <View style={styles.fieldSection}>
        <Icon name={'dribbble'} size={24} style={styles.fieldIcon} />
        <TextInput
          style={styles.input}
          autoComplete={'email'}
          keyboardType={'email-address'}
          textContentType={'emailAddress'}
          maxLength={256}
          placeholderTextColor="#707070"
          placeholder={'Dribbble username'}
          onChangeText={(email) => { this.setState({ email }) }}
          underlineColorAndroid="transparent" />
      </View>
      <View style={styles.fieldSection}>
        <Icon name={'twitter'} size={24} style={styles.fieldIcon} />
        <TextInput
          style={styles.input}
          autoComplete={'email'}
          keyboardType={'email-address'}
          textContentType={'emailAddress'}
          maxLength={256}
          placeholderTextColor="#707070"
          placeholder={'Twitter username'}
          onChangeText={(email) => { this.setState({ email }) }}
          underlineColorAndroid="transparent" />
      </View>
      <View style={styles.fieldSection}>
        <Icon name={'instagram'} size={24} style={styles.fieldIcon} />
        <TextInput
          style={styles.input}
          autoComplete={'email'}
          keyboardType={'email-address'}
          textContentType={'emailAddress'}
          maxLength={256}
          placeholderTextColor="#707070"
          placeholder={'Instagram username'}
          onChangeText={(email) => { this.setState({ email }) }}
          underlineColorAndroid="transparent" />
      </View>
      <View style={styles.fieldSection}>
        <Icon name={'github-circle'} size={24} style={styles.fieldIcon} />
        <TextInput
          style={styles.input}
          autoComplete={'email'}
          keyboardType={'email-address'}
          textContentType={'emailAddress'}
          maxLength={256}
          placeholderTextColor="#707070"
          placeholder={'Github username'}
          onChangeText={(email) => { this.setState({ email }) }}
          underlineColorAndroid="transparent" />
      </View>
    </View>
    <TouchableOpacity
      onPress={() => this.updateSocial()}
      style={styles.nextButton}>
      <Icon name={'check'} size={20} style={styles.nextButtonIcon} />
    </TouchableOpacity>
  </React.Fragment>
)

const DisplayNameEdit = (props) => (
  <React.Fragment>
        <View style={styles.modalContainer}>
      <View style={styles.fieldSection}>
        <Icon name={'account-edit'} size={24} style={styles.fieldIcon} />
        <TextInput
          style={styles.input}
          maxLength={256}
          placeholderTextColor="#707070"
          placeholder={'First Name'}
          onChangeText={(firstname) => { this.setState({ firstname }) }}
          underlineColorAndroid="transparent" />
      </View>
      <View style={styles.fieldSection}>
        <Icon name={'account-edit'} size={24} style={styles.fieldIcon} />
        <TextInput
          style={styles.input}
          maxLength={256}
          placeholderTextColor="#707070"
          placeholder={'Last Name'}
          onChangeText={(lastname) => { this.setState({ lastname }) }}
          underlineColorAndroid="transparent" />
      </View>
    </View>
    <TouchableOpacity
      onPress={() => this.updateName()}
      style={styles.nextButton}>
      <Icon name={'arrow-right'} size={20} style={styles.nextButtonIcon} />
    </TouchableOpacity>
  </React.Fragment>
)