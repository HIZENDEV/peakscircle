import React from 'react';
import {
  View,
  StatusBar,
  Platform,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default class Status extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const backgroundColor = this.props.backgroundColor
    // return (
    //   <View style={{height: STATUSBAR_HEIGHT, backgroundColor }}>
    //     <StatusBar translucent={false} backgroundColor={backgroundColor} barStyle={this.props.barStyle}/>
    //   </View>
    // );
    return <StatusBar translucent={false} backgroundColor={backgroundColor} barStyle={this.props.barStyle} />
  }
}
