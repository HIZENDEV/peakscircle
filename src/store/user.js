import {observable, action, autorun} from 'mobx'
import firebase from "react-native-firebase"
import * as auth from "@services/Auth"

class UserStore {
  @observable user = {}
  @observable counter = 0

  reaction = autorun(async () => {
    const user = await firebase.auth().currentUser
    this.user = user
    console.log(this.user)
  })

  constructor() {

  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  @action
  setUser = userInfo => {
    this.user = userInfo
  }
}

export default new UserStore()
