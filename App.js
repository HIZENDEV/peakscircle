import React from 'react';
import {YellowBox} from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Appstack screens
import Home from '@appstack/Home.js'
import Events from '@appstack/Events.js'
import Threads from '@appstack/Threads.js'
import Mates from '@appstack/Mates.js'
import Profile from '@appstack/Profile.js'
// Authstack screens
import Sign from '@authstack/Sign.js'
import AuthLoading from '@authstack/AuthLoading.js'

// ignore specific yellowbox warnings
YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger"]);
YellowBox.ignoreWarnings(['unknown call: "relay:check"']);

const AppStack = createBottomTabNavigator({
  Home: Home,
  Events: Events,
  //Threads: Threads,
  Mates: Mates,
  Profile: Profile,
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

export default createAppContainer(SwitchNavigator);
