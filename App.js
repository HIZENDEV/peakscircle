import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Appstack screens
import Home from '@appstack/Home.js'
import Events from '@appstack/Events.js'
import Threads from '@appstack/Threads.js'
import Profile from '@appstack/Profile.js'
// Authstack screens
import Sign from '@authstack/Sign.js'
import AuthLoading from '@authstack/AuthLoading.js'

const AppStack = createBottomTabNavigator({
  Home: Home,
  Events: Events,
  Threads: Threads,
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
      }
      return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    style: {
      backgroundColor: '#ffffff',
      borderTopWidth: 0
    },
    activeTintColor: '#000',
    inactiveTintColor: '#a0a0a0',
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
