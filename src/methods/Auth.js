    import { GoogleSignin } from 'react-native-google-signin';
    import firebase from 'react-native-firebase'

    // Calling this function will open Google for login.
    export const googleLogin = async () => {
      try {
        // Add any configuration settings here:
        await GoogleSignin.configure({
          hostedDomain: 'peaks.fr', // specifies a hosted domain restriction
          forceConsentPrompt: true, // [show the authorization prompt at each login if set as true.
        });

        const data = await GoogleSignin.signIn();

        // create a new firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
        // login with credential
        const currentUser = await firebase.auth().signInWithCredential(credential);
        const user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function () {
          console.log('ok')
        }).catch(function (error) {
          console.log(error)
        });
        console.info(JSON.stringify(currentUser.user.toJSON()));
      } catch (e) {
        console.error(e);
      }
    }