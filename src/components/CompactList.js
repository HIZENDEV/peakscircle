import React from 'react'
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {compactList as styles} from '@styles/Index'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          key: 0,
          title: 'California Burger',
          subscribersCount : 6,
          picUrl: 'https://www.confessionnal.ca/wp-content/uploads/2018/04/603267744.jpg'
        },{
          key: 1,
          title: 'Friendly Football',
          subscribersCount : 2,
          picUrl: 'http://www.ccsubluedevils.com/sports/msoc/2017-18/photos/0003/DSC_9792_releases.jpg'
        }
      ]
    }
  }

  render() {
    return (
      <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) =>
        <View>
            <Image/>
            <Text></Text>
        </View>
        }
      />
    )
  }

}
