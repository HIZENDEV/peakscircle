import React from 'react'
import {View, StatusBar} from 'react-native'
import LottieView from 'lottie-react-native';
import {loading as styles} from '@styles/Index'

export default class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: null
    }
  }

  render() {
    return this.props.fullscreen ? (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content"/>
        <LottieView
        source={require('@assets/loading.json')}
        autoPlay
        loop
        style={styles.lottie}
        />
      </View>
    ) : (
      <LottieView
        source={require('@assets/loading.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    )
  }
}
