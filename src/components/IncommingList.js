import React from "react"
import { FlatList, View, Text } from "react-native"
import { incommingList as styles } from "@styles/Index"
import Incomming from "@components/Incomming"
import { userNextEvents, nextEvents } from "@services/Events"

export default class IncommingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      this.props.user ? this.setState({ items: userNextEvents(this.props.events, nextProps.user) }) : this.setState({ items: nextEvents(this.props.events) })
    }
  }
  componentWillMount() {
    this.props.user ? this.setState({ items: userNextEvents(this.props.events, this.props.user) }) : this.setState({ items: nextEvents(this.props.events) })
  }

  render() {
    let emptyString = null
    if (this.props.name) {
      const nameArr = this.props.name.split(/\s+/)
      const firstName = nameArr.slice(0, -1).join(" ")
      emptyString = firstName
    }
    return (
      <FlatList data={this.state.items} renderItem={({ item }) => (
        <Incomming nextInfo={item} />
      )}
        keyExtractor={(item, index) => index.toString()}
        showsScrollIndicator={false}
        style={styles.list}
        ListEmptyComponent={_renderEmpty(emptyString)}
      />
    )
  }
}

const _renderEmpty = (props) => (
  <View style={styles.empty}>
    <Text style={styles.error}>{props + 'has no incomming events yet' || 'You have no incomming events yet'}</Text>
  </View>
)