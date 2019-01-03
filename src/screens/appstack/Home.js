import React from 'react'
import {SafeAreaView} from 'react-native'
import Header from '@components/Header'
import Title from '@components/Title'
import * as auth from '@services/Auth'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'Home'
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Header user={auth.currentUser} upcoming={2} />
        <Title name={'Events'} action={true} />
        <Title name={'Threads'} action={true} />
        <Title name={'Survey'} action={true} />
      </SafeAreaView>
    );
  }
}
