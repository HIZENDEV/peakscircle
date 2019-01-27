import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { event as styles } from "@styles/Index"
import Database from '@services/Database'
import Loading from '@components/Loading'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { observer } from "mobx-react";
import moment from 'moment'

@observer
export default class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    this.getSubscribersPic(this.props.eventInfo.key)
  }

  eventDate(timestamp, duration) {
    const startDate = moment(timestamp).toISOString()
    console.log(startDate)
    const endDate = startDate.add(duration, 'minutes').format("HH:mm")
    return startDate + ' - ' + endDate
  }

  async getSubscribersPic(key) {
    if (this.props.eventInfo.subscribersCount >= 3) {
      this.setState({ loading: true })
      const usersPic = await Database.PicRequest(key)
      this.setState({
        usersPic,
        loading: false
      })
      console.log(this.state.usersPic.toString())
    }
  }

  render() {
    
    const bubbleImg = (
        <View style={styles.bubbleContainer}>
          <View style={styles.bubbleImage}>

          </View>
          <View style={styles.bubbleImage}>
            <Text style={styles.bubbleText}>B</Text>
          </View>
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>+{this.props.eventInfo.subscribersCount - 2}</Text>
          </View>
        </View>
      )

     const bubble = (
        <View style={styles.bubblContainer}>
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>{this.props.eventInfo.subscribersCount}</Text>
          </View>
        </View>
      )
 
      return (
        <View style={styles.container}>
          {!this.state.loading ? (
            <View>
              <Image style={styles.image} source={{ uri: `${this.props.eventInfo.picUrl}` }} />

              <View style={styles.stretchedBlock}>
                <Text style={styles.title}>{this.props.eventInfo.title}</Text>
                {this.props.eventInfo.subscribersCount >= 3 ? bubbleImg : bubble }
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

                <TouchableOpacity style={styles.buttonIcon}>
                  <Icon name={'account-plus'} size={28} style={styles.buttonIconInner} />
                </TouchableOpacity>
              </View>
            </View>
            ) : (
              <Loading fullscreen={false} />
            )
          }
        </View>
      )
  }
}







