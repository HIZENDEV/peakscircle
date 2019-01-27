import React from 'react'
import { ScrollView, TouchableOpacity, Text, View, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { create as styles } from '@styles/Index'
import Header from '@components/Header'
import DatePicker from 'react-native-datepicker'
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
      screen: "Create",
      location: "21 rue François Garcin, 69003 Lyon",
      picUrl: "https://ugurseyman.info/wp-content/uploads/2018/07/34-wallpaper-samsung-c9-pro-terbaru.png",
    }
  }

  _submit() {
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
      alert('Voilà')
      const date = moment(this.state.startDate, 'DD MMM hh: mm').toISOString()
      const end = date.add(this.state.duration, 'minutes').format("hh: mm")

      const ts = moment(this.state.startDate, 'DD MMM hh: mm').valueOf()
      console.log(moment(date).format("M/D/YYYY H:mm"), end)
      const event = {
        title: this.state.name,
        description: this.state.description,
        location: this.state.location,
        startDate: ts,
        duration: this.state.duration,
        picUrl: this.state.picUrl,
        submitter: store.userStore.user.uid,
        maxSubs: this.state.maxSubs || null
      }
      store.eventStore.addEvent(event)
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
          imgUrl: source,
          active: false
        });
      }
    });
  }

  _fakeLocation() {
    openMap({ latitude: 45.7599736, longitude: 4.849967 });
  }

  render() {
    const active = () => {
      if (this.state.acite) {
        return { backgroundColor: '#EC4467' }
      } else {
        return { backgroundColor: '#444671' }
      }
    }

    const today = moment().format('YYYY-MM-DD')
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
          {/* Location */}
          <TouchableOpacity style={styles.fieldLocation} onPress={() => this._fakeLocation()}>
            <Icon name={'map-marker'} size={24} style={styles.fieldIcon} />
            <Text style={styles.placeholder}>Location</Text>
          </TouchableOpacity>
          {/* Date & Duration */}
          <View style={styles.fieldRow}>
            <View style={styles.fieldInRow}>
              <Icon name={'calendar'} size={24} style={styles.fieldIcon} />
              <DatePicker
                style={styles.inputDate}
                date={this.state.startDate}
                mode="datetime"
                is24Hour={true}
                placeholder="Date"
                format="DD MMM hh:mm"
                minDate={today}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    marginLeft: -36,
                    textAlign: 'left'
                  },
                  dateText: {
                    color: '#fff',
                    textAlign: 'left'
                  },
                  placeholderText: {
                    color: '#fff',
                    textAlign: 'left'
                  }
                }}
                onDateChange={(startDate) => { this.setState({ startDate }) }}
              />
            </View>
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
          {this.state.imgUrl ? (
            <TouchableOpacity style={styles.fieldImage} onPress={() => this._selectCover()}>
              <Image style={styles.fieldCover} source={{ uri: `${this.state.imgUrl.uri}` }} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.fieldImage} onPress={() => this._selectCover()}>
              <Icon name={'image-multiple'} size={24} style={styles.fieldIcon} />
              <Text style={styles.placeholder}>Open Picture Directory</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={[styles.submitButton, this.state.active ? styles.active : styles.disable ]} onPress={() => this._submit()}>
            <Text style={styles.submitText}>SUBMIT EVENT</Text>
          </TouchableOpacity>
          
        </ScrollView>
      </React.Fragment>
    )
  }
}