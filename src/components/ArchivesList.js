import React from "react";
import { FlatList, View, Text } from "react-native";
import { archivesList as styles } from "@styles/Index";
import Archive from "@components/Archive";
import { previousEvents, userPreviousEvents } from "@services/Events";
import { observer, inject } from "mobx-react/native";

@inject('store')
@observer
export default class ArchivesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      if (this.props.user) {
        this.setState({ items: userPreviousEvents(this.props.events, nextProps.user) })
      } else {
        this.setState({ items: this.props.store.events.previous })
      }
    }
  }
  componentWillMount() {
    this.props.user ? this.setState({ items: userPreviousEvents(this.props.events, this.props.user) }) : this.setState({ items: previousEvents(this.props.events) })
  }

  render() {
    let { store } = this.props
    let emptyString = null
    if (this.props.name) {
      const nameArr = this.props.name.split(/\s+/)
      const firstName = nameArr.slice(0, -1).join(" ")
      emptyString = firstName
    }
    return (
      <FlatList data={this.state.items} extraData={store.events} renderItem={({ item }) => (
        <Archive archiveInfo={item} navigation={this.props.navigation} />
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
    <Text style={styles.error}>{props + ' has not been to an event yet' || 'There is no past events yet'}</Text>
  </View>
)