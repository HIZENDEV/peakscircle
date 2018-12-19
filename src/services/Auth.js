import React from 'react'
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

export async function signIn(callback) {
  try {
    // Add any configuration settings here:
    await GoogleSignin.configure({
      hostedDomain: 'peaks.fr', // specifies a hosted domain restriction
      forceConsentPrompt: true // [show the authorization prompt at each login if set as true.
    });
    const data = await GoogleSignin.signIn();
    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(
      data.idToken,
      data.accessToken
    )
    // login with credential
    const currentUser = await firebase.auth().signInWithCredential(credential);
    // Get the current user information
    const user = firebase.auth().currentUser;

    console.log(currentUser.user);
  } catch (e) {
    console.error(e);
  }
}

export async function signOut() {
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
    GoogleSignin.revokeAccess();
    console.log('access has been revoked, the user is signed out')
  }).catch(function(error) {
  // An error happened.
    alert('Something goes wrong!!!')
    console.log(e)
  });
}



// export const signOut = withNavigation(googleLogout);
