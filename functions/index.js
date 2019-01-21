const functions = require('firebase-functions');
const admin = require('firebase-admin');
// initializes application
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database
  .ref("users/{userID}/")
  .onCreate(event => {
    // gets standard JavaScript object from the new write
    const writeData = event.data.data();
    // access data necessary for push notification 
    const sender = writeData.uid;
    const senderName = writeData.name;
    const recipient = writeData.recipient;
    // the payload is what will be delivered to the device(s)
    let payload = {
      notification: {
        title: 'title',
        body: 'body'
      }
    }
    // either store the recepient tokens in the document write
    const tokens = writeData.tokens;

    // or collect them by accessing your database
    let pushToken = "";
    return functions
      .database
      .ref("user_data_collection/recipient")
      .get()
      .then(doc => {
        pushToken = doc.data().token;
        // sendToDevice can also accept an array of push tokens
        return admin.messaging().sendToDevice(pushToken, payload);
      });
  });