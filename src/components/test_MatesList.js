import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { matesList as styles } from "@styles/Index";

export default class MatesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    this.setState({ items: Object.values(this.props.items) })
  }

  render() {
    return (
      <FlatList data={this.state.items} renderItem={({ item }) => (
        <TouchableOpacity style={styles.container}>
          <Image style={styles.image} source={{ uri: `${item.photoURL}` }} />
          <Text style={styles.title}>{item.displayName}</Text>
        </TouchableOpacity>
      )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        ListEmptyComponent={_renderEmpty()}
      />
    )
  }
}
// <Image style={styles.image} source={{ uri: `${item.photoURL}` }} />
const _renderEmpty = () => (
  <View style={styles.empty}>
    <Text style={styles.error}>There is currently no users</Text>
  </View>
)