import React from 'react'
import { ScrollView, TouchableOpacity, Text, View, TextInput, Image, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { create as styles } from '@styles/Index'
import Title from '@components/Title'
import Header from '@components/Header'
import Loading from '@components/Loading'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Modal from 'react-native-modalbox'
import Database from '@services/Database'
import openMap from 'react-native-open-maps'
import ImagePicker from 'react-native-image-picker'

import store from "@store/index"
import moment from 'moment'
import { observer, inject } from "mobx-react"

const options = {
  title: 'Select Cover',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

@inject('store')
@observer
export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      isDateTimePickerVisible: false,
      active: true,
      durationType: 'minutes',
      screen: "Create",
    }
  }

  _onClose = () => {
    switch (this.state.durationType) {
      case 'days':
        this.setState({ timer: this.state.duration * 1440 })
        break
      case 'hours':
        this.setState({ timer: this.state.duration * 60 })
        break
      default:
        this.setState({ timer: this.state.duration })
        break
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
    if (
      this.state.name &&
      this.state.description &&
      this.state.location &&
      this.state.startDate &&
      this.state.timer &&
      this.state.picUri
    ) {
      this.setState({ loading: true })
      let event = {
        title: this.state.name,
        description: this.state.description,
        location: this.state.location,
        startDate: this.state.startDate,
        duration: this.state.timer,
        submitter: store.user.current.uid,
        maxSubs: this.state.maxSubs || null
      }
      const name = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
      await Database.uploadPic(this.state.picUri, name).then(async function(result) {
        event.picUrl = result
        await store.events.addEvent(event)
      })
      this.setState({ loading: false })
      this.props.store.alert.show = {
        message: 'Your event has been added',
        type: 'success',
        display: true
      }
      this.props.navigation.goBack()
    } else {
      this.props.store.alert.show = {
        message: 'You should fill all fields',
        type: 'danger',
        display: true
      }
    }
  }

  _selectCover = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.setState({    
          picUrl: { base64: 'data:image/jpeg;base64,' + response.data},
          picUri: response.uri,
          active: true,
        })
      }
    });
  }

  _fakeLocation() {
    openMap({ latitude: 45.7599736, longitude: 4.849967 });
  }

  render() {
    if (this.state.loading) {
      return <Loading fullscreen={true} />
    } else {
      return (
        <React.Fragment>
          <Header back={() => this.props.navigation.goBack()} screen={this.state.screen} />
          <ScrollView style={{ backgroundColor: '#FFFFFF' }} >
            <Title name={'Basic details'} />
            {/* Title */}
            <View style={styles.fieldSection}>
              <Icon name={'pencil'} size={24} style={styles.fieldIcon} />
              <TextInput
                style={styles.input}
                maxLength={17}
                placeholderTextColor="#707070"
                placeholder={'Event name'}
                onChangeText={(name) => { this.setState({ name }) }}
                underlineColorAndroid="transparent" />
            </View>
            {/* Description */}
            <View style={styles.fieldSection}>
              <Icon name={'pencil'} size={24} style={styles.fieldIcon} />
              <TextInput
                style={styles.input}
                maxLength={148}
                placeholderTextColor="#707070"
                placeholder={'Event Description'}
                onChangeText={(description) => { this.setState({ description }) }}
                underlineColorAndroid="transparent" />
            </View>
            <View style={styles.fieldSection}>
              <Icon name={'map-marker'} size={24} style={styles.fieldIcon} />
              <TextInput
                style={styles.input}
                placeholderTextColor="#707070"
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
              <TouchableOpacity style={styles.fieldInRow} onPress={() => this.refs.modal.open()}>
                <Icon name={'clock-outline'} size={24} style={styles.fieldIcon} />
                <Text style={styles.fieldDate}>
                  { this.state.duration ? this.state.duration + this.state.durationType : 'Duration' }
                </Text>
              </TouchableOpacity>
            </View>
            {/* Tags */}
            {/* Maximum subscription */}
            <View style={styles.fieldSection}>
              <Icon name={'heart'} size={24} style={styles.fieldIcon} />
              <TextInput
                style={styles.input}
                placeholderTextColor="#707070"
                placeholder={'Maximum subscription'}
                onChangeText={(maxSub) => { this.setState({ maxSub }) }}
                keyboardType={'numeric'}
                underlineColorAndroid="transparent" />
            </View>
            {/* Image input */}
            <Title name={'Event cover'} />
            {this.state.picUrl ? (
              <TouchableOpacity style={styles.fieldImage} onPress={() => this._selectCover()}>
                <Image style={styles.fieldCover} source={{ uri: `${this.state.picUrl.base64}` }} />
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
              minimumDate={new Date()}/>
          </ScrollView>
          <Modal
            ref={"modal"}
            style={styles.modal}
            position={"top"}
            onClosed={() => this._onClose()}>
            <View style={styles.modalContainer}>
              <TextInput
                style={styles.modalInput}
                keyboardType={'numeric'}
                placeholderTextColor="#707070"
                placeholder={'Duration'}
                onChangeText={(duration) => { this.setState({ duration }) }}
                underlineColorAndroid="transparent" />
              <View style={styles.modalPicker}>
                <Picker
                  style={styles.modalPickerInner}
                  selectedValue={this.state.durationType}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({durationType: itemValue})
                  }>
                  <Picker.Item label="Minutes" value="minutes" />
                  <Picker.Item label="Hours" value="hours" />
                  <Picker.Item label="Days" value="days" />
                </Picker>
              </View>
            </View>
            <TouchableOpacity style={styles.modalSubmit} onPress={() => this.refs.modal.close()}>
              <Text style={styles.modalBtnTxt}>SUBMIT DURATION</Text>
            </TouchableOpacity>
          </Modal>
        </React.Fragment>
      )
    }
  }
}
