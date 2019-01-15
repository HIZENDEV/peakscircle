import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { compactList as styles } from "@styles/Index";

export default class CompactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    let items = Object.values(this.props.events);
    this.setState({ items: items })
  }

  render() {
    return (
      <FlatList data={this.state.items} renderItem={({ item }) => (
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: `${item.picUrl}` }} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        style={styles.list}
      />
      )
  }
}
