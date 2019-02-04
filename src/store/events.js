import { observable, computed, action, runInAction, toJS } from "mobx"
import firebase from 'react-native-firebase'
import Database from "@services/Database"
import { nextEvents, getMomories } from "@services/Events";

class Events {
  @observable initialState = {};
  @observable all = {};
  @observable loading = true;

  constructor() {
    this.loading = true
    firebase.database().ref('events').on('value', (snapshot) => {
      let sortable = []
      let tempKey = []
      this.initialState = snapshot.val()
      for (const event in this.initialState) {
        sortable.push(this.initialState[event])
      }
      for (const key in this.initialState) {
        tempKey.push(key)
      }
      for (let i = 0; i < sortable.length; i++) {
        sortable[i].key = tempKey[i]
      }
      sortable.sort(function (a, b) {
        return a.startDate - b.startDate
      })
      const temp = Object.assign({}, sortable)
      this.all = temp
      this.loading = false
      console.log('events: ', this.all, 'loading: ', this.loading)
    })
  }

  @computed get json() {
    return toJS(this.all)
  }

  @computed get next() {
    return nextEvents(this.all)
  }

  @computed get previous() {
    return previousEvents(this.all)
  }

  @computed get memories() {
    return getMomories(this.all)
  }

  @action
  addEvent = async (event) => {
    this.loading = true
    const result = await Database.pushEvent(event)
    runInAction(() => {
      this.loading = false
      if (result) {
        console.log(result)
      }
    })
  }

  @action
  addMemories = async (photoURL, eventId) => {
    this.loading = true
    const result = await Database.pushMemories(photoURL, eventId)
    runInAction(() => {
      this.loading = false
      if (result) {
        console.log(result)
      }
    })
  }

}

export default new Events()
