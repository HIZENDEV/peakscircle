import React from 'react';
import Loading from '@components/Loading';
import Header from '@components/Header';
import store from "@store/index";
import MatesList from '@components/MatesList'
import { observer } from 'mobx-react';
import { ScrollView } from 'react-native-gesture-handler';

@observer
export default class Mates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Mates"
    };
    this.back = this.props.navigation.goBack();
  }
  async componentWillMount() {
    await store.user.getAllUsers()
    this.setState({ user: Object.values(store.user.mates) });
  }
  render() {
    if (!store.user.loading) {
      return (
        <React.Fragment>
          <Header search={'Search for a user'} />
          <ScrollView style={{ backgroundColor: '#FFFFFF' }} >
            <MatesList items={store.user.mates} navigation={this.props.navigation} />
          </ScrollView>
        </React.Fragment>)
    }
    else {
      return <Loading fullscreen={true} />;
    }
  }
}
