import React from 'react'
import { StyleSheet, StatusBar } from 'react-native';
import firebase from 'react-native-firebase'
import Status from '@components/Status'
import Loading from '@components/Loading'
import AppIntroSlider from 'react-native-app-intro-slider';


const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
})

const slides = [
  {
    key: 'somethun',
    title: 'Create and share events',
    text: 'Create, share, and subscribe to personalized events quickly and easily',
    image: require('@assets/i01.png'),
    imageStyle: styles.image,
    backgroundColor: '#EC4467',
  },
  {
    key: 'somethun-dos',
    title: 'Invite friends to join us',
    text: 'Let your friends share good times with your teammates',
    image: require('@assets/i02.png'),
    imageStyle: styles.image,
    backgroundColor: '#EC4467',
  },
  {
    key: 'somethun1',
    title: 'Read some Threads',
    text: 'Because we never finish learning, and we like to share our thoughts',
    image: require('@assets/i03.png'),
    imageStyle: styles.image,
    backgroundColor: '#EC4467',
  }
]


export default class AuthLoading extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const user = await firebase.auth().currentUser
    if (user) {
      this.props.navigation.navigate('App')
    } else {
      this.setState({loading: false})
    }
  }

  _onDone = () => {
    this.props.navigation.navigate('Auth')
  }

  render() {
    if (this.state.loading) {
      return (
        <React.Fragment>
          <StatusBar backgroundColor={'#323160'} barStyle={'light-content'} />
          <Loading fullscreen={true} />
        </React.Fragment>
      )
    } else {
      return (
      <React.Fragment>
        <StatusBar backgroundColor={'#323160'} barStyle={'light-content'} />
        <AppIntroSlider slides={slides} onDone={this._onDone} />
      </React.Fragment>
      )
    }
  }
}
