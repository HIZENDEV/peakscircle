import React from "react";
import { FlatList, RefreshControl, View, Text } from "react-native";
import { archivesList as styles } from "@styles/Index";
import Archive from "@components/Archive";

export default class ArchivesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    let items = []
    for (const key in this.props.archives) {
      items.push({...this.props.archives[key], key})
    }
    this.setState({ items: items })
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