import React from 'react'
import {ScrollView, View} from 'react-native'
import Loading from '@components/Loading'
import Header from '@components/Header'
import * as auth from '@services/Auth'
import store from "@store/index";
import { observer } from "mobx-react";
@observer
export default class Threads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Threads"
    };
  }

  componentWillMount() {
    this.setState({
      user: store.user.currentUser
    })
  }

  _signOut = async () => {
    try {
      await auth.signOut();
      this.props.navigation.navigate("Auth");
    } catch (e) {
      alert("Something goes wrong!");
    }
  };

  render() {
    return <View>
        {this.state.user ? <ScrollView style={{ backgroundColor: '#FFFFFF' }} >
        <Header search={'Search for an event or a place'} />
          </ScrollView> : <Loading fullscreen={true} />}
      </View>;
  }
}
