import { observable } from "mobx"
import firebase from 'react-native-firebase'

class Threads {
  @observable all = {};
  @observable loading = true;

  constructor() {
    this.loading = true
    firebase.database().ref('threads').on('value', (snapshot) => {
      this.all = snapshot.val()
      this.loading = false
    })
  }

}

export default new Threads()
