import firebase from 'react-native-firebase';
import store from "@store/index";

class Database {
  PicRequest = async (eventKey) => {
    const subscribers = await firebase.database().ref("events/" + eventKey + "/subscribers").limitToLast(2).once("value")
    const users = Object.keys(subscribers.val())
    let url = []
    users.forEach(user => {
      this.revealUrl(user).then((result) => {
        url.push(result)
      })
    })
    return url
  }
  revealUrl = async (userId) => {
    let url = await firebase.database().ref("users/" + userId + "/photoURL").once("value")
    url = await url.val()
    return url
  }
  eventsRequest = async () => {
    const request = await firebase.database().ref("events/").orderByChild("duration").once("value")
    const events = Object.keys(request.val())
    return events
  }
}


export default new Database()