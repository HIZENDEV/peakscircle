import React from "react";
import { FlatList, RefreshControl, View, Text } from "react-native";
import { eventsList as styles } from "@styles/Index";
import Event from "@components/Event";

export default class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      refreshing: false
    };
  }

  componentWillMount() {
    let items = []
    for (const key in this.props.events) {
      items.push({...this.props.events[key], key})
    }
    this.setState({ items: items })
  }

  async refreshData() {
    this.setState({ refreshing: true })
    setTimeout(() => {
      this.setState({ refreshing: false })
    }, 2000)
  }

  render() {
    return (
      <FlatList data={this.state.items} renderItem={({ item }) => (
        <Event eventInfo={item} />
      )}
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.refreshData} />
        }
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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