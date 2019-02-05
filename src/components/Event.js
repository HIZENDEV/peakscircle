import React from "react"
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native"
import Modal from 'react-native-modalbox'
import Title from '@components/Title'
import { event as styles } from "@styles/Index"
import Database from '@services/Database'
import Loading from '@components/Loading'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { observer, inject } from "mobx-react";
import moment from 'moment'

@inject('store')
@observer
export default class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      subscribersCount: this.props.eventInfo.subscribersCount,
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    }
  }

  async componentDidMount() {
    await this.getSubscribers(this.props.eventInfo.key)
    this.isUserSubscribed()
  }

  _onClose = () => {
  }

  async inviteOutsider() {
    if (this.state.email) {
      await Database.addPendingUser(this.state.email)
      this.refs.modal.close()
      alert(`An invitation has been send to ${this.state.email}`)
    }
  }


  async toggleSubscribe(user) {
    if (!this.state.isSubscribed) {
      await Database.subscribeUser(user, this.props.eventInfo.key)
      this.setState({isSubscribed: true})
    } else {
      await Database.unsubscribeUser(user, this.props.eventInfo.key)
      this.setState({isSubscribed: false})
    }
  } 

  eventDate(timestamp, duration) {
    const startDate = moment.unix(timestamp).format('DD MMM HH:mm')
    const endDate = moment.unix(timestamp).add(duration, 'minutes').format('HH:mm')
    return (`Du ${startDate} à ${endDate}`)
  }

  isUserSubscribed() {
    const rig = Object.values(this.props.store.events.all)
    rig.forEach(event => {
      if (event.key === this.props.eventInfo.key) {
        const subscribers = event.subscribers.slice()
        subscribers.includes(this.props.store.user.current.uid) ?
        this.setState({isSubscribed: true}) : this.setState({isSubscribed: false})
      }
    })
  }

  async getSubscribers(key) {
    if (this.state.subscribersCount >= 1) {
      this.setState({ loading: true })
      const subscribersList = await Database.requestSubscribers(key, false)
      const temp = await Database.requestSubscribersProfile(subscribersList)
      const subscribers = Object.values(temp)
      this.setState({
        subscribersList,
        subscribers,
        loading: false
      })
    }
  }

  render() {
    const { navigation } = this.props
    const usersPreview = [
      this.state.subscribers ? this.state.subscribers[0].photoURL : null,
      this.state.subscribers ? this.state.subscribers[1].photoURL : null,
    ]
    
    const bubbleImg = (
        <TouchableOpacity style={styles.bubbleContainer} onPress={() => navigation.navigate('Subscribers', {subs: this.state.subscribers})}>
            <Image style={styles.bubbleImage} source={{ uri: `${usersPreview[0]}` }} />
            <Image style={styles.bubbleImage} source={{ uri: `${usersPreview[1]}` }} />
            <View style={styles.bubble}>
              <Text style={styles.bubbleText}>+{this.state.subscribersCount - 2}</Text>
            </View>
        </TouchableOpacity>
      )

     const bubble = (
        <TouchableOpacity style={styles.bubblContainer} onPress={() => navigation.navigate('Subscribers', {subs: this.state.subscribers})}>
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>{this.state.subscribersCount || 0}</Text>
          </View>
        </TouchableOpacity>
      )
 
      return (
        <View style={styles.container}>
          {!this.state.loading ? (
            <View>
              <Image style={styles.image} source={{ uri: `${this.props.eventInfo.picUrl}` }} />
              <View style={styles.stretchedBlock}>
                <Text style={styles.title}>{this.props.eventInfo.title}</Text>
                {this.state.subscribersCount >= 3 ? bubbleImg : bubble }
              </View>

              <View style={styles.block}>
                <Icon name={'calendar'} size={24} style={styles.icons} />
                <Text style={styles.info}>{this.eventDate(this.props.eventInfo.startDate, this.props.eventInfo.duration)}</Text>
              </View>

              <View style={styles.block}>
                <Icon name={'map-marker'} size={24} style={styles.icons} />
                <Text style={styles.info}>{this.props.eventInfo.location}</Text>
              </View>

              <View style={styles.block}>
                <Text style={styles.description}>{this.props.eventInfo.description}</Text>
              </View>

              <View style={styles.bottomBlock}>
                <TouchableOpacity style={styles.button} onPress={() => this.toggleSubscribe(this.props.user)}>
                  <Text style={styles.buttonText}>{this.state.isSubscribed ? 'Unsubscribe' : 'Subscribe'}</Text>
                </TouchableOpacity>
                { this.props.store.user.current.email.includes('@peaks.fr') ?  
                  (<TouchableOpacity style={styles.buttonIcon} onPress={() => this.refs.modal.open()}>
                    <Icon name={'account-plus'} size={28} style={styles.buttonIconInner} />
                  </TouchableOpacity>)
                  : null
                }
              </View>
              <Modal
                ref={"modal"}
                style={styles.modal}
                position={"center"}
                onClosed={() => this._onClose()}>
                <Title name="Invite a friend"/>
                <View style={styles.modalContainer}>
                <View style={styles.fieldSection}>
                    <Icon name={'email'} size={24} style={styles.fieldIcon} />
                    <TextInput
                      style={styles.input}
                      autoComplete={'email'}
                      keyboardType={'email-address'}
                      textContentType={'emailAddress'}
                      maxLength={256}
                      placeholderTextColor="#707070"
                      placeholder={'Email'}
                      onChangeText={(email) => { this.setState({ email }) }}
                      underlineColorAndroid="transparent" />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => this.inviteOutsider()}
                  style={styles.nextButton}
                >
                  <Icon name={'arrow-right'} size={20} style={styles.nextButtonIcon} />
                </TouchableOpacity>
              </Modal>
            </View>
            ) : (
              <Loading fullscreen={false} />
            )
          }
        </View>
      )
  }
}






