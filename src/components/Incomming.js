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
      loading: false
    }
  }

  async componentDidMount() {
    await this.getSubscribersPic(this.props.nextInfo.key)
  }

  async getSubscribersPic(key) {
    if (this.props.nextInfo.subscribersCount >= 3) {
      this.setState({ loading: true })
      const usersPic = await Database.PicRequest(key, true)
      this.setState({
        usersPic,
        loading: false
      })
    }
  }

  eventDate(timestamp) {
    return moment.unix(timestamp).format("DD MMM YYYY")
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
          <Text style={styles.bubbleText}>+{this.props.nextInfo.subscribersCount - 2}</Text>
        </View>
      </View>
    )

    const bubble = (
      <View style={styles.bubblContainer}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>{this.props.nextInfo.subscribersCount}</Text>
        </View>
      </View>
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
                {bubbleImg}
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.right}>
              <Text style={styles.buttonText}>Subscribe</Text>
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