import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { incomming as styles } from "@styles/Index"
import Loading from '@components/Loading'
import Database from '@services/Database'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { observer } from "mobx-react";
import moment from 'moment'

@observer
export default class Incommig extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      subscribersCount: this.props.nextInfo.subscribersCount,
    }
  }

  async componentDidMount() {
    await this.getSubscribers(this.props.nextInfo.key)
    this.isUserSubscribed(this.props.nextInfo)
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

  async isUserSubscribed(event) {
    event.subscribers.includes(this.props.user) ||
    event.submitter === this.props.user ?
    this.setState({isSubscribed: true}) : this.setState({isSubscribed: false})
  }

  eventDate(timestamp) {
    return moment.unix(timestamp).format("DD MMM YYYY")
  }

  render() {
    const usersPreview = [
      this.state.subscribers ? this.state.subscribers[0].photoURL : null,
      this.state.subscribers ? this.state.subscribers[1].photoURL : null,
    ]

    const bubbleImg = (
      <TouchableOpacity style={styles.bubbleContainer} onPress={() => this.props.navigation.navigate('Subscribers', {subs: this.state.subscribers})}>
          <Image style={styles.bubbleImage} source={{ uri: `${usersPreview[0]}` }} />
          <Image style={styles.bubbleImage} source={{ uri: `${usersPreview[1]}` }} />
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>+{this.state.subscribersCount - 2}</Text>
          </View>
      </TouchableOpacity>
    )

   const bubble = (
      <TouchableOpacity style={styles.bubblContainer} onPress={() => this.props.navigation.navigate('Subscribers', {subs: this.state.subscribers})}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>{this.state.subscribersCount || 0}</Text>
        </View>
      </TouchableOpacity>
    )
    return (
      <View style={styles.container}>
        {!this.state.loading ? (
          <View style={styles.placement}>

            <TouchableOpacity style={styles.left}>
              <Image style={styles.image} source={{ uri: `${this.props.nextInfo.picUrl}` }} />
              <View style={styles.info}>
                <Text style={styles.title}>{this.props.nextInfo.title}</Text>
                <Text style={styles.date}>{this.eventDate(this.props.nextInfo.startDate)}</Text>
                {this.state.subscribersCount >= 3 ? bubbleImg : bubble }
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={this.state.isSubscribed ? styles.rightDisable : styles.right} onPress={() => 
              this.props.navigation.navigate('Events')
            }>
              <Text style={styles.buttonText}>{this.state.isSubscribed ? 'Unsubscribe' : 'Subscribe'}</Text>
            </TouchableOpacity>

          </View>
        ) : (
            <Loading fullscreen={false} />
          )
        }
      </View>
    )
  }
}