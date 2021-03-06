import React from "react";
import { FlatList, RefreshControl, View, Text } from "react-native";
import { eventsList as styles } from "@styles/Index";
import Event from "@components/Event";
import { observer, inject } from "mobx-react/native";

@inject('store')
@observer
export default class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      refreshing: false
    };
  }

  componentWillMount() {
    this.setState({ items: this.props.store.events.next })
  }

  async refreshData() {
    this.setState({ refreshing: true })
    setTimeout(() => {
      this.setState({ refreshing: false })
    }, 2000)
  }

  render() {
    let { store } = this.props
    return (
      <FlatList data={store.events.next} extraData={store.events} renderItem={({ item }) => (
        <Event eventInfo={item} user={this.props.uid} navigation={this.props.navigation} />
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