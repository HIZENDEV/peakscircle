import React from "react"
import { FlatList, View, Text } from "react-native"
import { incommingList as styles } from "@styles/Index"
import Incomming from "@components/Incomming"
import { userNextEvents, nextEvents } from "@services/Events"

export default class IncommingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    this.props.user ? this.setState({ items: userNextEvents(this.props.events, this.props.user) }) : this.setState({ items: nextEvents(this.props.events) })
  }

  render() {
    return (
      <FlatList data={this.state.items} renderItem={({ item }) => (
        <Incomming nextInfo={item} />
      )}
        keyExtractor={(item, index) => index.toString()}
        showsScrollIndicator={false}
        style={styles.list}
        ListEmptyComponent={_renderEmpty(this.props.type)}
      />
    )
  }
}

const _renderEmpty = (props) => (
  <View style={styles.empty}>
    <Text style={styles.error}>There is currently no {props}</Text>
  </View>
)