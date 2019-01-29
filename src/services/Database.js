import firebase from 'react-native-firebase'
import store from "@store/index"
import RNFetchBlob from 'rn-fetch-blob'

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

  uploadPic = async (base64) => {
    console.log(base64)
    const image = base64
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob
  
    let uploadBlob = null
    const nameArray = image.split('/')
    const filename = nameArray[nameArray.length - 1]
    const imageRef = firebase.storage().ref('events/cover').child(filename)
    let mime = 'image/jpg'
    console.log(imageRef)
    fs.readFile(image, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        console.log(blob)
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        console.log(url)
        return url
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }
}


export default new Database()