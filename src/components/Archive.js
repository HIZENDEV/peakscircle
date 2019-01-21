import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { archive as styles } from "@styles/Index"
import Loading from '@components/Loading'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { observer } from "mobx-react";
import moment from 'moment'

@observer
export default class Archive extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  eventDate(timestamp) {
    return moment.unix(timestamp).format("DD MMM YYYY")
  }

  render() {
    
      return (
        <View style={styles.container}>
          {!this.state.loading ? (
            <View style={styles.placement}>

              <TouchableOpacity style={styles.left}>
                <Image style={styles.image} source={{ uri: `${this.props.archiveInfo.picUrl}` }} />
                <View style={styles.info}>
                  <Text style={styles.title}>{this.props.archiveInfo.title}</Text>
                  <Text style={styles.date}>{this.eventDate(this.props.archiveInfo.startDate)}</Text>
                  <Text style={styles.opinion}>*****</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.right}>
                <Icon name={'image-multiple'} size={24} style={styles.icons} />
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







