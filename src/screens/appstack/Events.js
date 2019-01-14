import React from 'react'
import {SafeAreaView, View} from 'react-native'
import Loading from '@components/Loading'
import Header from '@components/Header'
import * as auth from '@services/Auth'
import store from "@store/index";
import { observer } from "mobx-react";
@observer
export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Events"
    };
  }

  componentWillMount() {
    this.setState({
      user: store.userStore.user
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
        {this.state.user ? <SafeAreaView>
            <Header search={true} />
          </SafeAreaView> : <Loading fullscreen={true} />}
      </View>;
  }
}
