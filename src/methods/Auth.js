import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase'

// Calling this function will open Google for login.
export const googleLogin = async () => {
  try {
    // Add any configuration settings here:
    await GoogleSignin.configure({
      iosClientId: '940341785434-d7bdmcqnsbu7qlsjssg6va7foftsos07.apps.googleusercontent.com',
      hostedDomain: 'peaks.fr', // specifies a hosted domain restriction
      forceConsentPrompt: true, // [show the authorization prompt at each login if set as true.
    });

    const data = await GoogleSignin.signIn();

    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
    // login with credential
    const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

    console.log(currentUser.user);

  } catch (e) {
    console.error(e);
  }
}


export const onLoginOrRegister = () => {
  GoogleSignin.configure({
    iosClientId: '940341785434-d7bdmcqnsbu7qlsjssg6va7foftsos07.apps.googleusercontent.com',
    hostedDomain: 'peaks.fr', // specifies a hosted domain restriction
    forceConsentPrompt: true, // [show the authorization prompt at each login if set as true.
  });
  GoogleSignin.signIn()
    .then((data) => {
      // Create a new Firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
      // Login with the credential
      console.log(firebase.auth().signInWithCredential(credential))
      return firebase.auth().signInWithCredential(credential);
    })
    .then((user) => {
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the
      // `onAuthStateChanged` listener we set up in App.js earlier
    })
    .catch((error) => {
      const { code, message } = error;
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
}
