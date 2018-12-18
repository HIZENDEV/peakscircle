import React from 'react'
import {View, Button} from 'react-native'
import { signOut } from '@services/Auth';

export default class Home extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button
            onPress={signOut}
            title="Sign Out"
            color="#841584"
          />
        </View>
      );
    }
  }
