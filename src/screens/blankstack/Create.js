import React from 'react'
import { ScrollView, TouchableOpacity, Text, View, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { create as styles } from '@styles/Index'
import Header from '@components/Header'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Database from '@services/Database'
import openMap from 'react-native-open-maps'
import ImagePicker from 'react-native-image-picker'
import store from "@store/index"
import moment from 'moment'
import { observer } from "mobx-react"

const options = {
  title: 'Select Cover',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

@observer
export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      active: true,
      screen: "Create",
    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = (date) => {
    const timestamp = moment(date).format('X')
    this.setState({ startDate: timestamp })
    this._hideDateTimePicker()
  }

  _submit = async () => {
    // this.setState({ active: !this.state.active })
    if (
      this.state.name &&
      this.state.description &&
      this.state.location &&
      this.state.startDate &&
      this.state.duration &&
      this.state.picUrl &&
      store.userStore.user.uid
    ) {
      let event = {
        title: this.state.name,
        description: this.state.description,
        location: this.state.location,
        startDate: this.state.startDate,
        duration: this.state.duration,
        submitter: store.userStore.user.uid,
        maxSubs: this.state.maxSubs || null
      }
      const url = await Database.uploadPic(this.state.picUrl.base64)
      console.log(url)
      event.picUrl = url
      await store.eventStore.addEvent(event)
      alert('Event created!')
    } else {
      alert('You should fill all fields')
    }
  }

  _selectCover() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: 'data:image/jpeg;base64,' + response.data, base64: response.data }
        this.setState({
          picUrl: source,
          active: true,
        });
      }
    });
  }

  _fakeLocation() {
    openMap({ latitude: 45.7599736, longitude: 4.849967 });
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
              onChangeText={(name) => { this.setState({ name }) }}
              underlineColorAndroid="transparent" />
          </View>
          {/* Description */}
          <View style={styles.fieldSection}>
            <Icon name={'pencil'} size={24} style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholderTextColor="#FFFFFF"
              placeholder={'Event Description'}
              onChangeText={(description) => { this.setState({ description }) }}
              underlineColorAndroid="transparent" />
          </View>
          <View style={styles.fieldSection}>
            <Icon name={'map-marker'} size={24} style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholderTextColor="#FFFFFF"
              placeholder={'Location'}
              onChangeText={(location) => { this.setState({ location }) }}
              underlineColorAndroid="transparent" />
          </View>
          {/*
            <TouchableOpacity style={styles.fieldLocation} onPress={() => this._fakeLocation()}>
              <Icon name={'map-marker'} size={24} style={styles.fieldIcon} />
              <Text style={styles.placeholder}>Location</Text>
            </TouchableOpacity>
            */}
          {/* Date & Duration */}
          <View style={styles.fieldRow}>
            <TouchableOpacity onPress={this._showDateTimePicker} style={styles.fieldInRow}>
              <Icon name={'calendar'} size={24} style={styles.fieldIcon} />
              <Text style={styles.fieldDate}>
                { this.state.startDate ? moment.unix(this.state.startDate).format('DD MMM HH:mm') : 'Select Date' }
              </Text>
            </TouchableOpacity>
            <View style={styles.fieldInRow}>
              <Icon name={'clock-outline'} size={24} style={styles.fieldIcon} />
              <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                placeholderTextColor="#FFFFFF"
                placeholder={'Duration (min)'}
                onChangeText={(duration) => { this.setState({ duration }) }}
                underlineColorAndroid="transparent" />
            </View>
          </View>
          {/* Tags */}
          {/* Maximum subscription */}
          <View style={styles.fieldSection}>
            <Icon name={'heart'} size={24} style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholderTextColor="#FFFFFF"
              placeholder={'Maximum subscription'}
              onChangeText={(maxSub) => { this.setState({ maxSub }) }}
              keyboardType={'numeric'}
              underlineColorAndroid="transparent" />
          </View>
          {/* Image input */}
          {this.state.picUrl ? (
            <TouchableOpacity style={styles.fieldImage} onPress={() => this._selectCover()}>
              <Image style={styles.fieldCover} source={{ uri: `${this.state.picUrl.uri}` }} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.fieldImage} onPress={() => this._selectCover()}>
              <Icon name={'image-multiple'} size={24} style={styles.fieldIcon} />
              <Text style={styles.placeholder}>Open Picture Directory</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[styles.submitButton, this.state.active ? styles.active : styles.disable ]}
            onPress={() => this._submit()}>
            <Text style={styles.submitText}>SUBMIT EVENT</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            is24Hour={true}
            mode={'datetime'}
            minimumDate={new Date()}
          />
        </ScrollView>
      </React.Fragment>
    )
  }
}