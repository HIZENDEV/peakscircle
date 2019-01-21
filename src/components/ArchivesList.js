import React from "react";
import { FlatList, View, Text } from "react-native";
import { archivesList as styles } from "@styles/Index";
import Archive from "@components/Archive";
import { previousEvents, userPreviousEvents } from "@services/Events";

export default class ArchivesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentWillMount() {
    this.props.user ? this.setState({ items: userPreviousEvents(this.props.events) }) : this.setState({ items: previousEvents(this.props.events) })
  }

  render() {
    return (
      <FlatList data={this.state.items} renderItem={({ item }) => (
        <Archive archiveInfo={item} />
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