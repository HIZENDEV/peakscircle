import React from 'react';
import {YellowBox} from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import store from '@store/index'
import { Provider } from 'mobx-react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message"
// Appstack screens
import Home from '@appstack/Home.js'
import Events from '@appstack/Events.js'
import Threads from '@appstack/Threads.js'
import Mates from '@appstack/Mates.js'
import Profile from '@appstack/Profile.js'
// Blankstack screens
import User from '@blankstack/User.js'
import Event from '@blankstack/Event.js'
import Create from '@blankstack/Create.js'
import Image from '@blankstack/Image.js'
import Settings from '@blankstack/Settings.js'
import Subscribers from '@blankstack/Subscribers.js'
// Authstack screens
import Sign from '@authstack/Sign.js'
import AuthLoading from '@authstack/AuthLoading.js'

// ignore specific yellowbox warnings
YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger"]);
YellowBox.ignoreWarnings(['unknown call: "relay:check"']);

const EventsStack =  createStackNavigator({
  Events: { screen: Events },
  Create: { screen: Create },
  Event: { screen: Event },
  User: { screen: User },
  Subscribers: { screen: Subscribers },
  Image: { screen: Image,
    navigationOptions: ({ navigation }) => ({
    }),
  },
}, {
    initialRoute: 'Events',
    headerMode: 'none'
})

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile },
  Settings: { screen: Settings }
}, {
    initialRoute: 'Profile',
    headerMode: 'none'
  })

const UserStack = createStackNavigator({
  Mates: { screen: Mates },
  User: { screen: User }
}, {
    initialRoute: 'Mates',
    headerMode: 'none'
})

const AppStack = createBottomTabNavigator({
  Home: Home,
  Events: { screen: EventsStack },
  Mates: { screen: UserStack },
  Profile: { screen: ProfileStack },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home`;
      } else if (routeName === 'Profile') {
        iconName = `account`;
      } else if (routeName === 'Events') {
        iconName = `map-marker`;
      } else if (routeName === 'Threads') {
        iconName = `eye`;
      } else if (routeName === 'Mates') {
        iconName = `account-multiple`;
      }
      return <Icon name={iconName} size={horizontal ? 20 : 25} color='#DEDEEB' />;
    }
  }),
  initialRouteName: 'Home',
  tabBarOptions: {
    style: {
      backgroundColor: '#343363',
      borderTopWidth: 0
    },
    activeTintColor: '#DEDEEB',
    inactiveTintColor: '#494A66',
    showLabel: false,
    }
  }
)

const Authstack = createStackNavigator({
  Sign: Sign
}, {
  headerMode: 'none'
})

const SwitchNavigator = createSwitchNavigator({
  AppLoading: AuthLoading,
  App: AppStack,
  Auth: Authstack,
}, {
  initialRouteName: 'AppLoading'
})

const AppContainer = createAppContainer(SwitchNavigator)

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </React.Fragment>
    )
  }
}