const functions = require('firebase-functions');
const admin = require('firebase-admin');

// initializes your application
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database.ref("events/{eventId}")
  .onCreate((event) => {
    // gets standard JavaScript object from the new write
    const eventInfo = event.data.data();
    // access data necessary for push notification 
    const title = eventInfo.title;
    // the payload is what will be delivered to the device(s)
    let payload = {
      notification: {
        title: 'New Event',
        body: title
      }
    }

    // or collect them by accessing your database
    let pushToken = [];
    return functions.database.ref("users")
      .on("value", function(snapshot) {
        const user = snapshot.val();
        const array = Object.values(user);
        array.forEach(element => {
          pushToken.push(element.fcmToken)
        })
        return admin.messaging().sendToDevice(pushToken, payload);
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
})