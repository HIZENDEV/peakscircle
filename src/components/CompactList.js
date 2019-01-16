import React from "react";
import { View, Text, Image, FlatList, RefreshControl } from "react-native";
import { compactList as styles } from "@styles/Index";

export default class CompactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      refreshing: false
    };
  }

  componentWillMount() {
    let items = Object.values(this.props.events);
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
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: `${item.picUrl}` }} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
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