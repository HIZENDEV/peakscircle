import React from 'react'
import { ScrollView, TouchableOpacity, Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { create as styles } from '@styles/Index'
import Header from '@components/Header'
import store from "@store/index";
import { observer } from "mobx-react";

@observer
export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Create"
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header back={() => this.props.navigation.goBack()} screen={this.state.screen} />
        <ScrollView style={{ backgroundColor: '#323160' }} >
          {/* Title */}
          <View style={styles.fieldSection}>
            <Icon name={'pencil'} size={24} style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              maxLength={17}
              placeholderTextColor="#FFFFFF"
              placeholder={'Event name'}
              onChangeText={(searchString) => { this.setState({ searchString }) }}
              underlineColorAndroid="transparent" />
          </View>
          {/* Description */}
          <View style={styles.fieldSection}>
            <Icon name={'pencil'} size={24} style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholderTextColor="#FFFFFF"
              placeholder={'Event Description'}
              onChangeText={(searchString) => { this.setState({ searchString }) }}
              underlineColorAndroid="transparent" />
          </View>
          {/* Location */}
          <TouchableOpacity style={styles.fieldLocation}>
            <Icon name={'map-marker'} size={24} style={styles.fieldIcon} />
            <Text style={styles.placeholder}>Location</Text>
          </TouchableOpacity>
          {/* Date & Duration */}
          <View style={styles.fieldRow}>
            <View style={styles.fieldInRow}>
              <Icon name={'calendar'} size={24} style={styles.fieldIcon} />
              <TextInput
                style={styles.input}
                placeholderTextColor="#FFFFFF"
                placeholder={'Date'}
                onChangeText={(searchString) => { this.setState({ searchString }) }}
                underlineColorAndroid="transparent" />
            </View>
            <View style={styles.fieldInRow}>
              <Icon name={'clock-outline'} size={24} style={styles.fieldIcon} />
              <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                placeholderTextColor="#FFFFFF"
                placeholder={'Duration'}
                onChangeText={(searchString) => { this.setState({ searchString }) }}
                underlineColorAndroid="transparent" />
            </View>
          </View>
          {/* Tags */}
          <View style={styles.fieldSection}>
            <Icon name={'bookmark'} size={24} style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholderTextColor="#FFFFFF"
              placeholder={'Tags'}
              onChangeText={(searchString) => { this.setState({ searchString }) }}
              underlineColorAndroid="transparent" />
          </View>
          {/* Maximum subscription */}
          <View style={styles.fieldSection}>
            <Icon name={'heart'} size={24} style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholderTextColor="#FFFFFF"
              placeholder={'Maximum subscription'}
              onChangeText={(searchString) => { this.setState({ searchString }) }}
              underlineColorAndroid="transparent" />
          </View>
          {/* Image input */}
          { this.state.imgUrl ? (<Text>Image</Text>) : (
            <TouchableOpacity style={styles.fieldImage}>
              <Icon name={'image-multiple'} size={24} style={styles.fieldIcon} />
              <Text style={styles.placeholder}>Open Picture Directory</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </React.Fragment>
    )
  }
}
