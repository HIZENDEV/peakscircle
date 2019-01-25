import React from 'react'
import { ScrollView, TouchableOpacity, Text } from 'react-native'
import Header from '@components/Header'
import SettingsPan from '@components/SettingsPan'
import * as auth from '@services/Auth'
import store from "@store/index";
import { settings as styles } from '@styles/Index'
import { observer } from "mobx-react";

@observer
export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Settings"
    };
  }

  componentWillMount() {
    this.setState({
      user: store.userStore.currentUser
    })
  }

  _renderPrimary() {
    const items = [
      { title: 'Login with Touch ID', type: 'switch' },
      { title: 'Darwin Wallace', type: 'edit' },
      { title: 'Social Network', type: 'edit' },
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

  render() {
    return (
      <React.Fragment>
        <Header back={() => this.props.navigation.goBack()} screen={this.state.screen} />
        <ScrollView style={{ backgroundColor: '#323160' }} >
          <TouchableOpacity
            style={styles.logout}
            onPress={() => this._signOut()} >
            <Text style={styles.title}>Sign Out</Text>
          </TouchableOpacity>
          <SettingsPan items={this._renderPrimary()} />
          <SettingsPan items={this._renderOptional()} />
        </ScrollView>
      </React.Fragment>
    )
  }
}
