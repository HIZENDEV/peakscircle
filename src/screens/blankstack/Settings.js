import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Header from '@components/Header'
import * as auth from '@services/Auth'
import store from "@store/index";
import { observer } from "mobx-react";

@observer
export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Threads"
    };
  }

  componentWillMount() {
    this.setState({
      user: store.userStore.currentUser
    })
  }

  _signOut = async () => {
    await auth.signOut();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View>
        <Header back={() => this.props.navigation.goBack()} />
        <TouchableOpacity onPress={() => this._signOut()} >
          <Text>Sign Out</Text>
        </TouchableOpacity>
    </View>
    )
  }
}
