import { observable, computed, toJS } from 'mobx'
import firebase from 'react-native-firebase'

class Data {
  @observable data = {}
  @observable test = ''

  constructor() {
    firebase.database().ref('events').on('value', (snapshot) => {
      this.data = snapshot.val()
    })
  }

  @computed get json() {
    return toJS(this.data)
  }

  add = (name) => {
    const id = firebase.database().ref('test').push().key
    this.update(id, name)
  }

  update = (id, name) => {
    firebase.database().ref('test').update({[id]: {name}})
  }

  del = (id) => {
    firebase.database().ref('test').child(id).remove()
  }
}

export default new Data()