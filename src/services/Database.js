import firebase from 'react-native-firebase'
import { Platform } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'

class Database {
  requestSubscribers = async (eventKey, PicRequest) => {
    const subscribers = await firebase.database().ref("events/" + eventKey + "/subscribers").once("value")
    const users = subscribers.val()
    return users
  }

  requestSubscribersProfile = async (userId) => {
    const users = await firebase.database().ref("users").once("value")
    const list = users.val()
    return list
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

  requestPendingUsers = async (email) => {
    const users = await firebase.database().ref("pending").once("value")
    const list = users.val()
    return list
  } 

  addPendingUser = async (email) => {
    let pending = []
    await firebase.database().ref(`pending`).once("value", function(snapshot) {
      if (snapshot.exists()) {
        pending = snapshot.val()
        pending.push(email)
      } else {
        pending.push(email)
      }
    })
    firebase.database().ref()
    .update({
      pending
    })
    return true
  }

  requestRegisterPic = async () => {
    const pics = await firebase.database().ref("images").once("value")
    const list = pics.val()
    return list
  }

  pushEvent = async (event) => {
    firebase.database().ref('events').push({
      description: event.description,
      duration: event.duration,
      location: event.location,
      picUrl: event.picUrl,
      startDate: event.startDate,
      submitter: event.submitter,
      subscribersLimit: event.maxSubs,
      title: event.title,
    })
    return true
  }

  uploadPic = (uri, imageName, mime = 'image/jpg') => {
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob

    return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        let uploadBlob = null
        const imageRef = firebase.storage().ref('events/cover').child(imageName)
        fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob._ref, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          console.log(imageRef.getDownloadURL())
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          resolve(url)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  uploadMemories = (uri, imageName, mime = 'image/jpg') => {
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob

    return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        let uploadBlob = null
        const imageRef = firebase.storage().ref('events/memories').child(imageName)
        fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob._ref, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          console.log(imageRef.getDownloadURL())
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          resolve(url)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  pushMemories = async (photoURL, id) => {
    let memories = []
    await firebase.database().ref(`events/${id}`).child('memories').once("value", function(snapshot) {
      if (snapshot.exists()) {
        memories = snapshot.val()
        memories.unshift(photoURL)
      } else {
        memories.push(photoURL)
      }
    })
    firebase.database().ref(`events/${id}`)
    .update({
      memories
    })
    return true
  }

  subscribeUser = async (user, event) => {
    let subscribers = []
    await firebase.database().ref(`events/${event}`).child('subscribers').once("value", function(snapshot) {
      if (snapshot.exists()) {
        subscribers = snapshot.val()
        subscribers.unshift(user)
      } else {
        subscribers.push(user)
      }
    })
    firebase.database().ref(`events/${event}`)
    .update({
      subscribers
    })
    firebase.database().ref(`events/${event}/subscribersCount`).transaction(function (count) {return count + 1})
    return true
  }

  unsubscribeUser = async (user, event) => {
    let subscribers = []
    await firebase.database().ref(`events/${event}`).child('subscribers').once("value", function(snapshot) {
      subscribers = snapshot.val()
      subscribers = subscribers.filter(item => item !== user)
    })
    firebase.database().ref(`events/${event}`)
    .update({
      subscribers
    })
    firebase.database().ref(`events/${event}/subscribersCount`).transaction(function (count) {return count - 1})
    return true
  }

}


export default new Database()