import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, NativeModules, Platform } from 'react-native'
import Status from './Status'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { header as styles } from '@styles/Index'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: null
    }
  }

  render() {
    if (this.props.search) {
      {/* SearchBar header */}
      return (
        <View style={styles.header}>
          <Status backgroundColor="#5E8D48" barStyle="light-content" />
            <View style={styles.searchSection}>
              <Icon name={'magnify'} size={24} style={styles.searchIcon}/>
              <TextInput
                style={styles.input}
                placeholderTextColor="#FFFFFF"
                placeholder="Search for an event or a place"
                onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent" />
          </View>
        </View>
      )
    } else if (this.props.user) {
      {/* User header */}
      const nameArr = this.props.user.displayName.split(/\s+/)
      const firstName = nameArr.slice(0, -1).join(" ")
      return (
        <View style={styles.headerLeft}>
          <Status backgroundColor="#5E8D48" barStyle="light-content" />
          <Image source={{uri: this.props.user.photoURL}} style={styles.profilePic} />
          <View style={styles.rightText}>
            <Text style={styles.welcome}>{this.props.user.displayName ? 'Welcome ' + firstName + '!': 'Welcome user'}</Text>
            <Text style={styles.upcoming}>{this.props.upcoming ? 'You have '+ this.props.upcoming +' upcoming events' : 'You have no upcoming events'}</Text>
          </View>
        </View>
      )
    } else {
      {/* Default header */}
      return (
      <View style={styles.header}>
          <Status backgroundColor="#5E8D48" barStyle="light-content" />
          <View style={styles.centeredDefault}>
            <TouchableOpacity style={styles.back} onPress={() => this.props.back}>
              <Icon name={"chevron-left"} size={25} style={styles.icons} />
            </TouchableOpacity>
            <Text style={styles.title}>{this.props.screen}</Text>
            <TouchableOpacity style={styles.settings} onPress={() => this.props.settings}>
              <Icon name={"settings"} size={25} style={styles.icons} />
            </TouchableOpacity>
          </View>
        </View>
        );
    }
  }

}
