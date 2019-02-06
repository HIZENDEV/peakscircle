import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase';
import store from "@store/index";

import { observer, inject } from 'mobx-react';

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
    const fcmToken = await firebase.messaging().getToken();
    await store.user.setUser(user);
    await firebase
      .database()
      .ref("users/" + user.uid)
      .set({
        uid: user.uid || null,
        displayName: user.displayName || null,
        email: user.email || null,
        photoURL: user.photoURL || null,
        phoneNumber: user.phoneNumber || null,
        fcmToken: fcmToken || null,
      });
  } catch (e) {
    console.error(e);
  }
}

export async function signInWithEmailAndPassword(email, password, pre, callback) {
  try {
    const currentUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
    // Get the current user information
    firebase.database().ref('pending').equalTo(email).remove()
    const user = firebase.auth().currentUser
    user.updateProfile({
      displayName: pre.displayName,
      photoURL: pre.photoURL
    })
    const fcmToken = await firebase.messaging().getToken();
    await store.user.setUser(user);
    await firebase
      .database()
      .ref("users/" + user.uid)
      .set({
        uid: user.uid || null,
        displayName: user.displayName || pre.displayName,
        email: user.email || pre.email,
        photoURL: user.photoURL || pre.photoURL,
        phoneNumber: user.phoneNumber || null,
        fcmToken: fcmToken || null,
      });
  } catch (e) {
    console.error(e);
  }
}

export async function signOut() {
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
    GoogleSignin.revokeAccess();
    console.log('access has been revoked, the user is signed out')
    return true
  }).catch(function(error) {
  // An error happened.
    alert('Something goes wrong!!!')
    console.log(error)
  });
}

export const currentUser = firebase.auth().currentUser