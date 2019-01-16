import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { event as styles } from "@styles/Index"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import store from "@store/index";
import { observer } from "mobx-react";

@observer
export default class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  async renderSubscribersPic(key) {
    console.log('aaa')
    if (this.props.eventInfo.subscribersCount >= 3) {
      await store.eventStore.PicRequest(key)
      return (
        <View style={styles.bubbleContainer}>
          <View style={styles.bubbleImage}>
            <Text style={styles.bubbleText}>A</Text>
          </View>
          <View style={styles.bubbleImage}>
            <Text style={styles.bubbleText}>B</Text>
          </View>
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>+{this.props.eventInfo.subscribersCount - 2}</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.bubbleContainer}>
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>{this.props.eventInfo.subscribersCount}</Text>
          </View>
        </View>
      )
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: `${this.props.eventInfo.picUrl}` }} />
        <View style={styles.stretchedBlock}>
          <Text style={styles.title}>{this.props.eventInfo.title}</Text>
          {this.renderSubscribersPic(this.props.eventInfo.key)}
        </View>
        <View style={styles.block}>
          <Icon name={'calendar'} size={24} style={styles.icons} />
          <Text style={styles.info}>{this.props.eventInfo.startDate}</Text>
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
              <Text style={styles.buttonText}>Join</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIcon}>
            <Icon name={'account-plus'} size={28} style={styles.buttonIconInner} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}







