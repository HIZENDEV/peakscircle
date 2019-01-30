import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { event as styles } from "@styles/Index"
import Database from '@services/Database'
import Loading from '@components/Loading'
import SubscribersList from '@components/SubscribersList'
import Modal from 'react-native-modalbox'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { observer } from "mobx-react";
import moment from 'moment'

@observer
export default class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      subscribersCount: this.props.eventInfo.subscribersCount
    }
  }
  async componentDidMount() {
    await this.getSubscribers(this.props.eventInfo.key)
    this.isUserSubscribed()
  }

  async toggleSubscribe(user) {
    if (this.state.isSubscribed) {
      await Database.subscribeUser(user, event)
    } else {
      await Database.unsubscribeUser(user, event)
    }
  } 

  eventDate(timestamp, duration) {
    const startDate = moment.unix(timestamp).format('DD MMM HH:mm')
    const endDate = moment.unix(timestamp).add(duration, 'minutes').format('HH:mm')
    return (`Du ${startDate} à ${endDate}`)
  }

  isUserSubscribed() {
    if (this.state.subscribers) {
      this.state.subscribers.forEach(user => {
        if (user === this.props.user)
          this.setState({ isSubscribed: true })
        else
          this.setState({ isSubscribed: false })
      })
    }
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
    const usersPreview = [
      this.state.subscribers ? this.state.subscribers[0].photoURL : null,
      this.state.subscribers ? this.state.subscribers[1].photoURL : null,
    ]
    
    const bubbleImg = (
        <TouchableOpacity style={styles.bubbleContainer} onPress={() => this.refs.modal.open()}>
            <Image style={styles.bubbleImage} source={{ uri: `${usersPreview[0]}` }} />
            <Image style={styles.bubbleImage} source={{ uri: `${usersPreview[1]}` }} />
            <View style={styles.bubble}>
              <Text style={styles.bubbleText}>+{this.state.subscribersCount - 2}</Text>
            </View>
        </TouchableOpacity>
      )

     const bubble = (
        <TouchableOpacity style={styles.bubblContainer} onPress={() => this.refs.modal.open()}>
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
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Subscribe</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonIcon} onPress={() => this.toggleSubscribe(this.props.user)}>
                  <Icon name={'account-plus'} size={28} style={styles.buttonIconInner} />
                </TouchableOpacity>
              </View>
              <Modal
                ref={"modal"}
                style={styles.modal}
                position={"top"}>
                <SubscribersList items={this.state.subscribers} back={() => this.refs.modal.close()} />
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






