import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { eventInfo as styles } from '@styles/Index'
import moment from 'moment'
import { observer } from "mobx-react";

@observer
export default class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  eventDate(timestamp) {
    return moment.unix(timestamp).format("DD MMM YYYY")
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.cover} source={{ uri: `${this.props.info.picUrl}` }} />
        <View style={styles.content}>
          <Text style={styles.title}>{this.props.info.title}</Text>
            <Text style={styles.date}>{this.eventDate(this.props.info.startDate)}</Text>
          <View style={styles.opinion}>
            <Text style={styles.stars}>*****</Text>
            <Icon name={'pencil'} size={16} style={styles.opinionIcons} />
            <Text style={styles.opinionCount}>24 opinion</Text>
          </View>
          <Text style={styles.description}>{this.props.info.description}</Text>
        </View>
      </View>
    );
  }
}
