import firebase from 'react-native-firebase'
import { Platform } from 'react-native'
import store from "@store/index"
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
    firebase.database().ref(`events/${id}`).update({
      memories: [
        photoURL
      ]
    })
    return true
  }

  subscribeUser = (user, event) => {
  }

  unsubscribeUser = (user, event) => {
  }

}


export default new Database()