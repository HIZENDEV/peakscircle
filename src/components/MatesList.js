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
        <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Profile', {user: item})} >
          <Image style={styles.image} source={{ uri: `${item.photoURL}` }} />
          <View style={styles.right}>
            <Text style={styles.displayName}>{item.displayName}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        </TouchableOpacity>
      )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        ListEmptyComponent={_renderEmpty()}
      />
    )
  }
}

const _renderEmpty = () => (
  <View style={styles.empty}>
    <Text style={styles.error}>There is currently no users</Text>
  </View>
)