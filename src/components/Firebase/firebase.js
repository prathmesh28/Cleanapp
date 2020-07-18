import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDnD6NNBFvNF6fo_yQRF7QZO_yQK6zrWA8",
  authDomain: "socialapp-218ab.firebaseapp.com",
  databaseURL: "https://socialapp-218ab.firebaseio.com",
  projectId: "socialapp-218ab",
  storageBucket: "socialapp-218ab.appspot.com",
  messagingSenderId: "404024590842",
  appId: "1:404024590842:web:a6dcae0417223a564fa443"
}

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
