import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBmyzkNR4_VY_ag_J3cWRaxf4l_DgslqtU',
  authDomain: 'donit-f86dc.firebaseapp.com',
  databaseURL: 'https://donit-f86dc.firebaseio.com',
  projectId: 'donit-f86dc',
  storageBucket: 'donit-f86dc.appspot.com',
  messagingSenderId: '767418026906'
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();

    this.googleProvider = new app.auth.GoogleAuthProvider();
  }
}

export default Firebase;
